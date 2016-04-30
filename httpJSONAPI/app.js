/* HTTP JSON API Server */

var http = require('http');
var portNum = process.argv[2];
var url = require('url');
var data = '';

var server = http.createServer(function (req,res){
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var date = new Date((url.parse(req.url, true)).query.iso);

    if(/^\/api\/parsetime/.test(req.url)) {
        data = JSON.stringify({hour:date.getHours(), minute:date.getMinutes(), second:date.getSeconds()});
    } else if (/^\/api\/unixtime/.test(req.url)) {
        data = JSON.stringify({unixtime: date.getTime()});
    }
    
    if(data) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(data);
    } else {
        res.writeHead(404, 'Drats!!!');
    }
    
   
});

server.listen(portNum);

/* Official solution

var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
     
     */