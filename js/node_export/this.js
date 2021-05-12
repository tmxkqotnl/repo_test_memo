// in node

var imp = require('./js.js');
console.log(this === module.exports); // === module.exports in this file;
console.log(imp);

function a(){
    console.log(this === global);
    console.log(this); // object global
}

a();