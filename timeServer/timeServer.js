var net = require('net');
var portNum = process.argv[2];

var server = net.createServer(function (socket){
    var data = "";
    var min = '';
    var hour ='';
    var day = '';
    var month = '';
    var year = '';
    
    var date = new Date();
    
    year = date.getFullYear().toString();
    
    if (date.getMinutes() < 10){
        min = '0' + date.getMinutes().toString();
    } else {
        min  = date.getMinutes().toString();
    }
    
    if (date.getHours() < 10){
        hour = '0' + date.getHours().toString();
    } else {
        hour = date.getHours().toString();
    }
    
    if (date.getDate() < 10){
        day = '0' + date.getDate().toString();
    } else {
        day = date.getDate().toString();
    }
    
    if (date.getMonth() < 9){
        month = '0' + (date.getMonth() + 1).toString();
    } else {
        month = (date.getMonth() + 1).toString();
    }
    
    data = year + '-' + month + '-' + day + ' ' + hour + ':' + min + '\n';
    socket.end(data);
});

server.listen(portNum);

/*
Solution
var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  

*/