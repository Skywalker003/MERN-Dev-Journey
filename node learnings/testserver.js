// http module is built in module of node js
const http = require('http');

// creating server using http module
const server = http.createServer((req , res) => {

    console.log('request made');

    // response to the request
    res.setHeader('Content-Type', 'text/plain'); // setting the content type of the response to plain text
    res.write('hello world');
    res.end();

    // logging the request url and method
    console.log(req.url, req.method);

})

// listening for requests on port 3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})