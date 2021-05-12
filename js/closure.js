// problem
for(let i = 0; i<100;i++){
    setTimeout(()=>{ // asynchronous function
        console.log(i);
    }, i*100); 
}

// solution => closure
for(let i = 0; i<100;i++){
    (function (j){ // independent space
        setTimeout(()=>{
            console.log(j);
        }, j*100);
    })(i); // execution immediately

    /* or
    function closure(j){
        setTimeout(()=>{
            console.log(j)
        }, j*100);
    }
    closure(j);
    */
   
}