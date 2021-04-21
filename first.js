/*
var chalk = require("chalk")
console.log("this is first nodejs application")
console.log(chalk.blue("this is blue color text"))
console.log(chalk.green("This is green color text"))
*/

/*
function displayText(){
    console.log("first function in paranthesis");
}
function displayGivenText(msg){
     console.log("given text:"+msg);
}
function sum(a,b){
    return a+b;
}
function display(msg1,msg2){
    console.log("msg is:"+msg1);
    console.log(msg2);
}
displayText();
displayGivenText("Simple Text");
console.log(sum(3,4));
display("reshma");

var x=function(a,b){
    return a-b;
};
console.log(x(4,2));

function say(msh){
    console.log("given text:"+msh);
}
say("hello");
*/

/*
var person={firstname:"reshma",
lastname:"pothuri",
age:20,
 fullname:function(){
     return this.firstname+" "+this.lastname;
 },
 fullname1:function(){
      return "Sai"+"reshma";
 }
};//one object
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.fullname());
console.log(person.fullname1());
*/

/*
//obj:student:regdn0,name,branch,function:display student
var student={regdno:121810304051,
    Name:"Sai Reshma",
    Branch:"CSE",
    display:function(){
        return this.regdno+" "+this.Name+" "+this.Branch;
    }
};
console.log(student.display());
*/

/*
var fs=require("fs")

var fileContents=fs.readFileSync("inputfile1.txt");
console.log(fileContents.toString());

var sum= 23+45;
console.log(sum);

fs.readFile("inputfile1.txt",function(ferr,contents){
    if(ferr) console.log("error");
        console.log(contents.toString());
});

var diff=32-12;
console.log(diff);
*/

/*
function sum(a,b,func1){
    var s=a+b;
    func1(s);
}
sum(2,3,function(result){
    console.log(result);
});
*/

/*
const fs=require('fs')
console.log("This is module")

//fs.writeFile("inputfile1.txt","This is the text",function(){
//   console.log("writting completed")
// })

fs.appendFileSync("inputfile1.txt","This is the appended text")
*/

/*
console.log("This is in first.js file");
var mod=require('./module.js')
console.log(mod.n1);
console.log(mod.sum(2,3));
console.log(mod.obj);
*/

/*
const val=require('validator')
console.log(val.isEmail("pothurisaireshma@gmail.com"));
var mod=require('./module.js')
console.log(val.isDecimal(mod.n1));
*/

/*
var n=45678
var result=0
debugger
while(n!=0){
    var r=Math.floor(n%10)
    result=(result*10)+r
    n=Math.floor(n/10)
}
console.log(result);
*/

/*
var n=23
var fact=1
var i=1
while(i<=n){
    fact=fact*i;
    i++
}
console.log(fact);
*/

/*
var division=function(x,y,divresult){
    if(y==0){
        divresult(new Error("division by zero"))
    }
else{
    divresult(null,x/y)
    }
}
try{
    division(x,y,function(err,result){
        if(err)
        throw err;
        else{
            console.log(result);
        }
    })
}
catch(err){

    console.log(err);
}
division(9,0,function(ferr,result){
    if(ferr) console.log("9/0 is error"+ferr);
    else
    console.log(result);
})

division(9,3,function(ferr,result){
    if(ferr) console.log("9/0 is error"+ferr);
    else
    console.log(result);
})
*/

/*
var fs=require("fs")
var student={regdno:121810304051,
    Name:"Sai Reshma",
    Branch:"CSE",
};
/* var stdstring=JSON.stringify(student,null,2)
fs.writeFile("jsonfile.json",stdstring,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("json file written successfully");
    }
})*/
/*
fs.readFile("jsonfile.json",function(err,data){
    if(err) console.log(err)
    else{
        var s1=JSON.parse(data)
        console.log(s1)
    }
})
*/

/*
const request= require("request")

var link="http://api.weatherstack.com/current?access_key=f68d67052c2683c92f95d74bb95bccb3&query=16.54,81.52";
request({url:link,json:true},function(err,response){
    if(err) console.log(error);
    else {
    
    var data=response.body
    console.log(data.current);
    var current=data.current
    console.log(current);
    console.log(current.temperature);
    }
});
*/
/*
const request=require("request")
var link1="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVzaG1hLTEyIiwiYSI6ImNrbm9xcjAwOTE5bjQydm81bGUyaXJkYWgifQ.YNxDhe3BVklWFIITOtzFUQ"
request({url:link1,json:true},function(err,response){
if(err) console.log(error)
else{
    var data=response.body
    console.log(data.features[0].center[0])
    console.log(data.features[0].center[1])
    if(err)
    console.log(error)
    else{
        var link2="http://api.weatherstack.com/current?access_key=f68d67052c2683c92f95d74bb95bccb3&query=16.54,81.52";
        request({url:link2,json:true},function(err,response){
            if(err) console.log(error);
            else {
            
            var data2=response.body
            console.log(data2.current);
            var current=data2.current
            console.log(current);
            console.log(current.temperature);
            }
        });console.log("hjuyg");
    }
}
})//passing particular areas lati ad longi and temperature
*/

const http=require("http")
const url = require("url")
const fs=require("fs")

var server=http.createServer(function(req,res){
    //res.setHeader=("content-Type:","plain/html")
    // res.write("<h1>Hello world!</h1><br><p>This is Reshma</p>")
    //res.end()
    fs.readFile("./index.html",function(err,data){
        if(err)  console.log("error while reading file");
        else{
            var htmlcode=data
            res.write(htmlcode)
            res.end()
            
        }
    })
})























