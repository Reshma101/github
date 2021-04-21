console.log("This is in the module.js file");
var name="Reshma";
var func=function(a,b){
    return a+b;
}
module.exports.n1=name

var student={name:"Reshma",
regdno:121810304051,
branch:"CSE",
display:function(){
    console.log(this.name+" "+this.regdno+" "+this.branch)
}
};
var std=console.log(student.display())
module.exports.sum=func
module.exports.obj=std

