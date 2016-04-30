var dir = process.argv[2];
var ext = process.argv[3];
var myModule = require('./modular_filter.js');

myModule(dir,ext, function(err,data) {
    if(err){
        console.log(err);
    }
    data.forEach(function(file) {
        console.log(file);
    });
});
