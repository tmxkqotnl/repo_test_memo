const ex = {a:1,b:{c:2,d:3}};
var {a, b:{d}} = ex;
console.log(a,d); // 1 3

var arr = [1,2,3,4,5];
var [x,y,,,z] = arr;
console.log(x,y,z); // 1 2 5

// this scope in destructuring_assignment
const test = {
    arr2:[1,2,3],
    log:function(){
        console.log(this.arr2);
    }}

test.log(); // [1,2,3]

var test_f = test.log;
var {arr2,log} = test

test_f(); // undefined
log(); // undefined