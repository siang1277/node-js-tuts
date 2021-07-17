const http = require('http');
const fs = require('fs');
var _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // lodash
    const num = _.random(0, 20);
    console.log("Number: ", num);

    const greet = _.once(() => {
        console.log('hello')
    });

    greet();
    greet();

    // set header content type
    // res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about': 
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': 
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    // res.write('Hello World');
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>Hello World</p>');
    // res.write('<p>Hello World Again</p>');
    // res.end();

    // send an html file
    // fs.readFile('./views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});

// 200 - OK
// 301 - Resource moved
// 404 - Not found
// 500 - Internal server error

// 100 Range - informational responses
// 200 Range - success code
// 300 Range - codes for redirects
// 400 Range - user or client error codes
// 500 Range - server error codes


// other package - express to handle the switch case