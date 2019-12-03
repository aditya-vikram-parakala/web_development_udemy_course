var guess = Number(prompt("Guess a number"));
var ans = 7;
if(guess< ans){
    alert("Too Low, try again!");
}
else if(guess>ans)
{
alert("Too High, try again!");
}
else{
    alert("Guessed it right!!!");
}