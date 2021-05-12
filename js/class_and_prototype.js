// class is easy and specific mode of prototype

/// Declaration ///
var Human = function(type){
    this.type = type|| 'human';
}
Human.isHuman = function(human){
    return human instanceof Human;
}
Human.prototype.breathe = ()=>{
    console.log('h-a-a-a-m');
}

class Human2{
    constructor(type = 'Human'){
        this.type = type;
    }
    static isHuman(human){
        return human instanceof Human2;
    }
    breathe(){
        console.log('h-a-a-a-m');
    }
}

/// inheritance ///

var inh = function(type, fn, ln){
    Human.apply(this.arguments);
    this.fn = fn;
    this.ln = ln;
}
inh.prototype = Object.create(Human.prototype);
inh.prototype.constructor = inh;
inh.prototype.Log = function(){
    console.log(this.fn+' '+this.ln);
}

var inh_instance = new inh('human','K','H');
console.log(Human.isHuman(inh_instance));
inh_instance.Log();

class inh_class extends Human2{
    constructor(type, fn, ln){
        super(type);
        this.fn = fn;
        this.ln = ln;
    }
    Log(){
        console.log(this.fn+' '+this.ln);
    }
}
var inh_class_instance = new inh_class('human','K','H');
console.log(Human2.isHuman(inh_class_instance));
inh_class_instance.Log();