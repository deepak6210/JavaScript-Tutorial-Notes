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

// Profile Lookup 
var contacts =[
{
    "firstName": "Akira",
    "lastName": "laine",
    "number": "1234567890",
    "likes": ["Pizza", "burger", "Cake"]
},
{
    "firstName": "Deepak",
    "lastName": "Sharma",
    "number": "7473423847",
    "likes": ["Momoss", "chowmin", "Burger"]
},
{
    "firstName": "Mohit",
    "lastName": "Kantiwal",
    "number": "4767637462372",
    "likes": ["yogurt", "Coldrink"]
},
{
    "firstName": "Randeep",
    "lastName": "Jangra",
    "number": "5446756855",
    "likes": ["Hacking", "python"]
},
];

function lookUpProfile(name, prop){
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No Such Property";
        }
    }
    return "No Such Contact"
}

var data = lookUpProfile("Akira", "likes");

console.log(data);

// Generate Random Fractions 
function randomFraction(){
    return Math.random();
}
console.log(randomFraction());

// Genrate Random Whole Numbers 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);

function randomWholeNum(){
   
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

// Generate Random Whole Numbers Within a Range 
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(12, 45))

// Ude the parseInt Function
function convertToInteger(str){
     return parseInt(str);

}
console.log(convertToInteger("56"));

// Use the parseInt Function with a Radix 
function convertToInteger(str){
    return parseInt(str, 2)
}
console.log(convertToInteger("10011"));

// Use the Conditional (Ternary) Operator 
// Condition ? Statement-if-True : Statement-If-false;
function checkEqual(a,b){
    return a === b ? true : false;
}
console.log(checkEqual(1, 2));


// Use Multiple Condition (Ternary Operators)
function checkSign(num){
   return num > 0 ? "Positive" : num < 0 ? "Negative" : "zero";
}
console.log(checkSign(10));
