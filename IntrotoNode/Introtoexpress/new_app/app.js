var express = require("express");
var app = express();

app.get("/", (req,res)=>{
res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:pet", (req,res)=>{
var petname = req.params.pet;
if(petname === "pig"){
res.send("The"+ petname +" says 'Oink'");
}
else if(petname === "dog"){
    res.send("The"+ petname +" says 'Woof Woof!'");
}
else if(petname === "cow"){
    res.send("The"+ petname +" says 'Moo'");
}
});

app.get("/repeat/:pattern/:times", (req,res)=>{
var pattern = req.params.pattern;
var times = req.params.times;
var ans="";
for(var i=0;i<times;i++){
    ans+=pattern+" ";
}
res.send(ans);
});

app.get("*", (req,res)=>{
res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000 , () =>{
    console.log("Started listening to clients...");
});