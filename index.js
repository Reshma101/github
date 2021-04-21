var chalk=require("chalk");
const { fstat } = require("fs");
console.log(chalk.blue("Hlo this is my first js file"));

function sum(a,b){
    return a+b;
}
console.log(sum(2,3));
var student={ firstname: "reshma",
regdno:"fiftyone",
display:function(){
    return this.firstname+" "+this.regdno;
}
};
console.log(student.firstname);
console.log(student.display());


/*fs.readFile("inputfile2.txt",function(err,contents){
    if(err) console.log(error);
    else{
        console.log(contents.toString());
    }
});
*/
var fs=require("fs")
var read=fs.readFileSync("inputfile2.txt");
console.log(read.toString());
fs.readFile("inputfile2.txt",function(err,contents){
    if(err) console.log(error);
    else{
        console.log(contents.toString());
    }
});
//fs.writeFileSync("indexfile2.txt");
var rea=fs.readFileSync("inputfile2.txt");
console.log(rea.toString());
fs.unlink("inputfile2.txt",function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  /*
var mod=require("./module.js")
console.log(mod.n1);

const val=require("validator")
console.log(val.isDecimal(mod.n1));

const request=require("request")
var link="http://api.weatherstack.com/current?access_key=f68d67052c2683c92f95d74bb95bccb3&query=16.54,81.52";
request({url:link,json:true},function(err,res){
    if(err) console.log("err");
    else{
        var data=res.body;
        console.log(data.current);
    }
})

const http=require("http")
const url=require("url")
var server=http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,data){
        if(err) console.log("err");
    else{
        var html=data
        res.write(html)
        res.end()
    }
    }) 
})
*/

var urll=url.parse(req.url,true)
var pathname=urll.pathname
var method=req.method//GET //POST
var header=req.header
var query=req.query

req.on("data",function(){
    console.log("data is received")
})
req.on("end",function(){

})


server.listen(4000,function(){
    console.log("server is running on port 4000");
})

