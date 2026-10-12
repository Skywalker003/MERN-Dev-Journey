const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './docs/';

    if(req.url ==='/'){
        path += 'index.html';
    }
    else if(req.url === '/about') {
        path += 'about.html';
    }
    else {
        path += '404.html';
        res.statusCode = 404;

        // we can also redirect to another page instead of showing 404 page
        /*
        res.statusCode = 301;
        res.setHeader('Location', '/');
        res.end();
        */
    }

    fs.readFile( path, (err, data) => {
        if(err) {
            console.log(err);
            res.end('Error loading page');
        }
        else {
            res.write(data);
            res.end();
        }
    })


})

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
})