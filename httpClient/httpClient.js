var http = require('http');
var url = process.argv[2];

function performTask(callback){
    return http.get(url, function(response){
        var body = [];
        response.setEncoding('utf8');
        response.on('data', function(d) {
            body.push(d);
        });
        response.on('end', function() {
            for(var i in body){
                console.log(body[i]);
            }
            callback(function(){
                console.log("backcall yo");
            });
        });
    });
}

performTask();

/* official solution


var http = require('http')  
       
     http.get(process.argv[2], function (response) {  
       response.setEncoding('utf8')  
       response.on('data', console.log)  
       response.on('error', console.error)  
     })    */
     