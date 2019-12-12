var express = require("express");
var app = express();
app.set("view engine","ejs");
app.get("/friends",(req,res)=>{
    var friends = ["A","B","C","D"];
res.render("friends",{friends:friends});
});

app.listen(3000, ()=>{
console.log("Server started!!");
});