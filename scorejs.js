var pb1 = document.getElementById("p1");
var pb2 = document.getElementById("p2");
var r = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var pcnt1 = 0;
var pcnt2 = 0;
var isGameOver = false; 
var ans = 5;
pb1.addEventListener("click",function(){
if(!isGameOver){
    pcnt1++;
    p1Display.textContent = pcnt1;

    if(pcnt1 === ans){
        p1Display.style.color = "green";
        isGameOver = true;

    }

}

});
pb2.addEventListener("click",function(){
    if(!isGameOver){
        pcnt2++;
        p2Display.textContent = pcnt2;
        if(pcnt2 === ans){
            p2Display.style.color = "green";
            isGameOver = true;
        }
    
    }
    
});
r.addEventListener("click",function(){
p1Display.textContent = 0;
p1Display.style.color = "black";
p2Display.textContent = 0;
p2Display.style.color = "black";
});
