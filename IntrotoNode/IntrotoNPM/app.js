// var cat = require("cat-me");
// console.log(cat()); 
var faker = require('faker');
for(var i=0;i<10;i++){
    var randomName = faker.commerce.productName(); // Rowan Nikolaus
    var randomPrice = faker.commerce.price(); // Kassandra.Haley@erich.biz
    console.log( i+1+ " "+randomName + " "+randomPrice);
    // console.log();
}
