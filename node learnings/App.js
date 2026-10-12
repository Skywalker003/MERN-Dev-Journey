// this is a simple express server that serves static files from the docs folder
const exp = require('express');

const app = exp();

app.listen(3000)

// simple middleware to log the request method , url , host and path

app.use((req, res, next) => {
    console.log('request received');
    console.log(req.host);
    console.log(req.path);
    console.log(req.method, req.url);
    next();

})

// this is for routing to different pages
app.get('/', (req, res) => {
    // res.send('Hello, World!');
    res.sendFile('./docs/index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
    // res.send('Hello, World!');
    res.sendFile('./docs/about.html', {root: __dirname})
});

// redirecting to another page 

app.get('/contact', (req,res) => {
    res.redirect('/about')
})

// this is for handling 404 errors
app.use((req, res) => {
    res.status(404).sendFile('./docs/404.html', {root: __dirname})
})