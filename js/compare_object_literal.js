// old version
var sayNode = () =>{
    console.log("object literal");
};

var es = 'ES';
var old = {
    sayJS: ()=>{
        console.log('JS');
    },
    sayNode : sayNode, // specific declare
};
old[es+6] = 'add'; // separated

old.sayJS();
old.sayNode();
console.log(old.ES6,'\n');

// object literal
const ob = {
    sayJS(){ // declaration of function is shortened
        console.log('JS');
    },
    sayNode, //  if key and value have same name
    [es+6] : 'add', // can use dynamic attribute name in object 
}

ob.sayJS();
ob.sayNode();
console.log(ob.ES6)
