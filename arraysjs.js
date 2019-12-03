function isUniform(arr){
    for(var i=0;i<arguments.length;i++){
        if(arr[i]!==arr[i+1]){
            return false;
        }
    }
    return true;
}
console.log(isUniform([1,2,3,4]));

function printReverse(arr){
    for(var i=arr.length-1;i>=0;i--){
        console.log(arr[i]);
    }
}
console.log(printReverse([1,2,3,4]));
function sumArray(arr){
    var s = 0;
    for(var i=0;i<arr.length;i++){
        s+=arr[i];
    }
    return s;
}
console.log(sumArray([1,2,3,4]));
function maxArray(arr){
    var m = 0;
    for(var i=0;i<arr.length;i++){
        m=Math.max(m,arr[i]);
    }
    return m;
}
console.log(maxArray([1,2,3,4]));
