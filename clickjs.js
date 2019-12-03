var b = document.querySelector("button");
var body = document.querySelector("body");
var flag = true;
b.style.border = "2px solid red";


b.addEventListener("click",function(){
    if(flag){
        body.style.background = "purple";
    }
    else{
        body.style.background = "white";
    }
    flag =!flag;
    
}); 
