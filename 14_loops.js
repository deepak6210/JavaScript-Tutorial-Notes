// Iterate with While Loops 
var myArray = [];
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}
console.log(myArray)

// Iterate with For Loops 
var ourArray = [];

for (var i = 0; i < 10; i++) {
    ourArray.push(i);
}
console.log(ourArray);

// Iterate Odd Numbers With a For Loop 
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

console.log(ourArray);

// Iterate Even Numbers With a For Loop 
var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}
console.log(myArray);

// Count BackWards with a For Loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);

// In cause of odd Number 
var ourArray = [];
for (var i = 9; i > 0; i -= 2) {
    ourArray.push(i);
}
console.log(ourArray);

// Iterate Through an Array with a for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
};
console.log(ourTotal);

// Nested For Loop
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

// Iterate with Do ... While Loops 
var myArray = [];
var i = 10;

do{
    myArray.push(i);
    i++;
}while (i < 5)

console.log(i, myArray);