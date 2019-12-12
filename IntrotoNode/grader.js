var scores = [90,98,89,100,100,86,94];
function average(scores){
    var sum =0;
    for(var i=0;i<scores.length;i++){
        sum= sum+scores[i];
    }
    // console.log(sum);
    console.log(Math.round(sum/scores.length));
}
average(scores);