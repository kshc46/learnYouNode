/* http UpperCaserer */

var http = require('http');
var map = require('through2-map');
var portNum = process.argv[2];

var server = http.createServer(function (req,res){
    
    if (req.method !== 'POST') {
        return res.end('Post only fool!\n');
    }
    
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
   
});

server.listen(portNum);

/* solution

var http = require('http')  
     var map = require('through2-map')  
       
     var server = http.createServer(function (req, res) {  
       if (req.method != 'POST')  
         return res.end('send me a POST\n')  
       
       req.pipe(map(function (chunk) {  
         return chunk.toString().toUpperCase()  
       })).pipe(res)  
     })  
       
     server.listen(Number(process.argv[2]))  
     
     
*/