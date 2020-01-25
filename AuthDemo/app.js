var express = require("express");
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var passportLocal = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var bodyParser = require("body-parser");
var user = require("./models/user");


mongoose.connect("mongodb://localhost/auth_demo_app");
app.use(bodyParser.urlencoded({
    extended:true
}));
app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(require("express-session")({
secret:"This is a secret message",
resave:false,
saveUninitialized:false
}));
passport.use(new passportLocal(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.get("/", function(req,res){
res.render("home");
});

app.get("/secret", isLoggedIn,function(req,res){
    res.render("secret");
});
//Routes

app.get("/register", function(req, res){
res.render("register");
});

app.post("/register", function(req,res){
    user.register(new user({username:req.body.username}),req.body.password,function(err, user){
        if(err){
            console.log(err);
            return res.render("/register");
        }
        else{
            passport.authenticate("local")(req, res, function(){
                res.redirect("/secret");
            });
        }
    });
});

//Login Route

app.get("/login", function(req,res){
    res.render("login");
});
//Middleware the passport line
app.post("/login", passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
}),function(req, res){

});
//Logout
app.get("/logout", function(req, res){
    req.logOut();
    res.redirect("/");
});

//Middleware for secret page
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        
        return next();
    }
    console.log("in Else");
    res.redirect("/login");
}
//Server listening
app.listen(3001, function(req,res){
    console.log("Server started!!");
});
