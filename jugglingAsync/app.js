var http = require('http');
var finArr = [];
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var count = 0;

for (var i in urls) {
    main(i);
}
    
function main(i) {
    http.get(urls[i], function (response) {  
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
            finArr[i] = finished;
            print();
        });
        response.on('error', console.error);
    });
}

function print() {
    count++;
    if (count === urls.length) {
        for (var each in finArr) {
            console.log(finArr[each]);
        }
    }
}


/* Solution 

     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
       */