// Reusable Function   
function ourReusableFunction() {
    console.log("hello, World");
}
ourReusableFunction();
ourReusableFunction();

// Passing Values to Function with Arguments
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5);

// Global Scopes And Functions 
// The Function which are defined Outside the function have the global scope it means it can be seen any where in  your javaScript code
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "\noopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();

// Local Scope And Functions 
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();
// console.log(myVar); //This is not Accesable because the var have defined inside the function and they have the local scope so we can't use it outside the function.  


// Global vs. Local Scope in Function.
var outerWear = "T-Shirt";
function myOutFit() {
    var outerWear = "Jeans";
    return outerWear;
}
console.log(myOutFit());
console.log(outerWear);

// Return a Value from a Function with Return 
function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

// Understanding Undefined Value Returend from a Function. 
function addFive() {
    sum += 5;
}

// Assignment with a Returned Value 
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed);

// Stand in Line 
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Boolean Values :- They are another type of variable in javaScript it have only two value True & False. 
function welcomeTobooleans() {
    return false;
}

// Use Conditional logic with If Statements
function trueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
        return "No, it's false";
}

console.log(trueOrFalse());

// comparison with the Equality Operator
function testEqual(val){
    if(val == '10'){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));

// Comparison with the Strict Equality Operator 
// Strict Equality Conversion :- The Eqality Operator attempts to convert both value compared to a comman type
// Where the Strict Equality oprerator does not do the type conversion. 
function testStrict(val){
    if(val === '10'){
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(10));

// Practice Comparing Different Values
function compareEquality(a, b) {
    if(a === b){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareEquality(10, '10'));

// Comparision with the Inequality Operator 
function testNotEqual(val){
    if(val != 99){
       return "Not Equal";
    }
    return "Equal";
}
console.log(testNotEqual('99'));

// Comparision with the Strict Inequality Operator 
function testStrictNotEqual(val){
    if(val !== '10'){
       return "Not Equal";
    }
    return "Equal";
}
console.log(testStrictNotEqual(10));

// Comparision with the Logical and Operators 
function testGreaterThan(val){
    if(val > 100){
        return "Over 100"
    }
    if(val > 10){
        return "Over 10";
    }
    return "10 or Under";
}
console.log(testGreaterThan(10));

// Comparision with te Greater than Or Equal To Operator 
function testGreaterOrEqual(val){
     if (val >= 20){
         return "20 or Over";
     }
     if (val >= 10) {
         return "10 or Over";
     }
     return "Less than 10";
}
console.log(testGreaterOrEqual(10))

// Comparison with the Less Than Operator 
function testLessThan(val){
    if (val < 25){
        return "Under 25";
    }
    if (val <= 10) {
        return "Under 55";
    }
    return "55 or Over";
}
console.log(testLessThan(10));

// Comparision with the Less Than Or Equal To Operartor 
function testLessOrEqual(val){
    if (val <= 12){
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}
console.log(testLessOrEqual(10));

// Comparisions with the Logical And Operator 
function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "Yes";
    }
    return "No";
}
console.log(testLogicalAnd(10));

// Comparisons with the logical Or Operator 
function testlogicalOr(val){
    if(val < 10 || val > 20){
        return "Outside";
    }
    return "Inside";
}
console.log(testlogicalOr(10));

