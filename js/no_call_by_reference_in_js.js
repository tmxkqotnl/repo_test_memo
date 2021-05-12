function no(t){
    t.a = 5;
    console.log(t); // {a:5}
}
var A = {a:3};
no(A);
console.log(A); // {a:5}

function no2(t){
    t = 10;
    console.log(t); // 10
}
var B = {a:3};
no2(B);
console.log(B); //{a:3}

// only "call by value" is being.
// parameter delivered to function refers to object like shallow copy