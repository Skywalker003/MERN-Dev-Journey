const express = require('express');

const app = express();

const port= 3000;

const users = [
    {id: 1, user_name: 'John Doe'},
    {id: 2, user_name: 'Jane Smith'},
    {id: 3, user_name: 'Bob Johnson'},
    {id: 4, user_name: 'Alice Williams'},
    {id: 5, user_name: 'Michael Brown'}
]

app.use(express.json());

// middleware to get user index by id
const getUserIndexById = (req, res, next) => {
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).send({msg: 'Invalid user id'})
    }

    const userIndex = users.findIndex((user) => user.id === id);
    if(userIndex === -1){
        res.status(404).send({msg: 'User not found'})
    }
    else{
        req.userIndex = userIndex;// attach userIndex to request object
        next();
    }
}

app.get('/', (req, res ) => {
    res.send({msg: 'hello from express'});
})

// this is a query parameter example
app.get('/api/users', (req, res ) => {

    const { query:{ filter, value } } = req;

    console.log(filter, value);

    if( filter && value){
        res.send(users.filter((user) => user[filter].toLowerCase().includes(value)));
    }
    else{
        res.send(users);
    }
})

// this is a route parameter example
app.get('/api/users/:id', (req, res ) => {
    //console.log(parseInt(req.params.id));

    const id = parseInt(req.params.id);
    if(isNaN(id)){
        res.status(400).send({msg: 'Invalid user id'})
    }
    
    const user = users.find((user) => user.id === id);

    if(!user){
        res.status(404).send({msg: 'User not found'})
    }
    else{
        res.status(200).send(user);
    }
})


//this is put method example
app.put('/api/users/:id', getUserIndexById, (req, res ) => {
    console.log(req.body);
    //const { params: { id, body }} = req;

    //this is being handled by middleware so we dont need to do it here;
    /*
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).send({msg: 'Invalid user id'})
    }

    const userIndex = users.findIndex((user) => user.id === id);
    if(userIndex === -1){
        res.status(404).send({msg: 'User not found'})
    }
    */
    
    //const userIndex = req.userIndex;
    const { userIndex } = req;
    users[userIndex] = {...users[userIndex], ...req.body}; // this is patch and {id: id, ...req.body } this is put
    res.status(200).send({msg: 'user updated successfully'})
})

//this is delete method example

app.delete('/api/users/:id', getUserIndexById, (req, res ) => {
    
    /*
    const id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).send({msg: 'Invalid user id'})
    }

    const userIndex = users.findIndex((user) => user.id ===id);
    if(userIndex === -1){
        res.status(404).send({msg: 'User not found'})
    }
    */
    const { userIndex } = req;
    users.splice(userIndex, 1);
    res.status(200).send({msg: 'user deleted successfully'});
})

app.post('/api/users', (req, res ) => {
    console.log(req.body);
    const { body } = req;
    const newUser = {id: users[users.length - 1].id+1, ...body};
    users.push(newUser);
    res.status(201).send({msg: 'User created successfully'});
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
