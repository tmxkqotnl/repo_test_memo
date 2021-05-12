/*
    static scoping
*/

var name = 1;
function test(){
    console.log(name); // undefined

    var name = 2;
    function test_inner(){
        console.log(name); // 2
    }
    test_inner();
}
test();

let name2 = 1;
function test_let(){
    console.log(name2); // error

    let name2 = 2; 
    function test_let_inner(){
        console.log(name2);
    }
    test_let_inner();
}
test_let();