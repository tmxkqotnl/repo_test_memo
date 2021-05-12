const a = (x,y) => {x,y}; // {x:x, y:y}? or just function body {x,y}?
const b = (x,y) =>{
    return {x,y};
};

console.log(a(1,2)); // undefined! 
console.log(b(1,2)); // {x:1, y:2}

const correct_a = (x,y) => ({x,y});
console.log(correct_a(1,2)); // {x:1, y:2}

// difference of 'this' scope
const rel1 = {
    val:[1,2,3],
    val2:'test',
    log(){
        var that = this; 
        this.val.forEach(function(v){ 
            console.log(that.val2,v); 
        });
    },
}
const rel2 = {
    val:[1,2,3],
    val2:'test',
    log(){
        this.val.forEach(v =>{  
            console.log(this.val2,v); 
        });
    },
}
rel1.log();
rel2.log();