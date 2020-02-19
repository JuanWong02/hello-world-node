//libreria http de node.js//
const http = require ('http');

//host: loopback address//
const hostname = '127.0.0.1';

// node.js default port//
const port = 3000;

//ECMAScript o function
const f2 = () => {}

//ECMAScript o Anonymous function
//req -> request
// res -> result
//request methods: get -> pedir datos (solo url)////// post -> enviar datos (body)
const server = http.createServer((req, res) => {
    //ok
    res.statusCode = 200;
    //set content mimetype for plain text
    res.setHeader('Content-Type','text/plain');

    res.end('Hello World!');
});


server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});