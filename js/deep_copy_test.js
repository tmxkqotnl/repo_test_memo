// between primitve variable
var a = 1;
var b = 2;
a = b;
a = 3;

console.log(a,b); // 3 2

// between object. only primitive elements can be copied directly
// objects are refered by variables, not generated or copied

//case 1//
var arr = [1,2,3,{c:2}];
var arrCopy = arr.slice(); // [1,2,3,{c:2}] // or object.assign(target,origin)

arrCopy[2] = 5
arrCopy[3].c = 3;
console.log(arrCopy[2], arr[2], arrCopy[3], arr[3]); // 5 3 {c:3} {c:3}. changed.
arr[3].c = 2;

//case 2//
arrCopy = JSON.parse(JSON.stringify(arr)); // very bad performance and not perfect(only JSON structure can be parsed)
arrCopy[3].c = 3;
console.log(arrCopy[3],arr[3]); // {c:3} {c:2}

//case 3//
//hard coding//


