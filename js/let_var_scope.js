/*
    let is block scope
    var is function scope
*/

function case1(){
    let a = 1;
    var b = 1;

    if(true){
        let a = 2;
        var b = 2;
    }

    console.log(a,b); // 1 2
}

function case2(){

    if(true){
        let a = 1; // only valid in this scope
        var b = 1;
    }

    console.log(a,b); // error
}

function case3(){
    let a = 1;
    var b = 1;

    let a = 2; // cannot declare let variables that have same name in the same scope
    var b = 2;

    console.log(a,b);
}

case1();
case2();
case3();