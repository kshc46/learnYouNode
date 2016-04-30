/* http collect */

var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
var loc = process. argv[3];

var server = http.createServer(function (request,response){

    var readStream = fs.createReadStream(loc);
    
    readStream.on('open', function () {
        readStream.pipe(response);
      });
      
    readStream.on('error', function(err) {
        response.end(err);
    });
});

server.listen(portNum);