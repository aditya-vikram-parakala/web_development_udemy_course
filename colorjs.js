// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)",
//     "rgb(0, 255, 0)",
// ];
var colors = generateRandomColor(6);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 =document.querySelector("h1");
var button = document.getElementById("newGame");
var easy = document.getElementById("easyBtn");
var hard = document.getElementById("hardBtn");



easy.addEventListener("click", function(){
    colors = generateRandomColor(3);
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<square.length;i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i];
        }
        else{
            square[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";


});
hard.addEventListener("click", function(){
    colors = generateRandomColor(6);
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<colors.length;i++){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }
        h1.style.backgroundColor = "steelblue";

});


colorDisplay.textContent = pickedColor;
for(var i=0;i<square.length;i++){
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            changeColors(clickedColor);
            messageDisplay.textContent = "Correct";
            h1.style.backgroundColor = clickedColor;
            button.textContent = "Play Again?";
        }
        else{
            messageDisplay.textContent = "Try Again";
            this.style.backgroundColor = "black";
        }
        // messageDisplay.textContent = "Correct";

    });
}

button.addEventListener("click", function(){
    // colors = generateRandomColor(6);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // for(var i=0;i<squares.length;i++){
    //     square[i].style.backgroundColor = colors[i];
    //     square[i].style.display = "block";
    // }
    // h1.style.backgroundColor = "steelblue";
    colors = generateRandomColor(6);
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<colors.length;i++){
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
        }
        h1.style.backgroundColor = "steelblue";

            messageDisplay.textContent = "";


});

function changeColors(color){
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var index = Math.floor(Math.random(0,1)*colors.length);
    return colors[index];
}

function generateRandomColor(num){
    var arr = [];
    //generate num of entries in the array
    for(var i=0;i<num;i++){
        var cols = randomColor();
        arr.push(cols);
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb("+ r +", " + g +", " + b +")";
}
