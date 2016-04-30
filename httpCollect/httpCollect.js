var http = require('http');  
       
     http.get(process.argv[2], function (response) {  
       var body = [];
       response.setEncoding('utf8');
       response.on('data', function(d) {
            body.push(d);
        });  
        response.on('end', function() {
            var bodyJoined = body.join("");
            bodyJoined = bodyJoined.split("");
            var finished = '';
            for (var i in bodyJoined) {
                if(bodyJoined[i] !== ','){
                finished = finished.concat(bodyJoined[i]);
                }
            }
            console.log(bodyJoined.length);
            console.log(finished);
        });
       response.on('error', console.error);
     });
     
     /* 
      var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  */