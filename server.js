var server = require('./server/request-handler.js');

const port = 8000;

server.listen(port);
console.log('Server is listening on localhost port:', port);
