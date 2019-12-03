
var flag = prompt("Enter your answer");
todo = []


while(flag!=="quit"){
    
if(flag === "new"){
    var val = prompt("Enter todo item");
    todo.push(val);
    console.log("You added " + val);
}
//add
else if(flag === "list"){
    todo.forEach(function(val,index){   
        console.log(index+" : "+val);
    });
}

//delete
else if(flag === "delete"){
    var val = prompt("Enter index to delete");
    todo.splice(val,1);
    console.log("Deleted the element at index "+ val);
}
flag = prompt("Enter your answer");
}
alert("Ok, You quit the process");

//view