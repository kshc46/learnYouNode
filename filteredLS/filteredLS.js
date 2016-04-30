var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, data){
    if(err) {
        console.log(err);
    } else {
        for(var i in data){
            if(path.extname(data[i]) === ("." + ext)){
                console.log(data[i]);
            }
        }
    }
});
