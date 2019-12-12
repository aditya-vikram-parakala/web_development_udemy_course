var express = require("express");
var app = express();

app.get("/", (req, res)=>{
// console.log("Hi there!");
res.send("Hi there!");
});
app.get("/bye", (req,res)=>{
// console.log("Goodbye!");
res.send("Goodbye!");
});
app.get("/dogs", (req,res)=>{
// console.log("MEOW!");
res.send("MEOW!");
});
app.listen(3000, () => {
    console.log("Listening to client!");
});