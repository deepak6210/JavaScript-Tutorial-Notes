// Primitive data types 

// String 
let name = "Deepak";
console.log("my name is " + name);
// Output :- my name is Deepak
console.log("Data type is " + (typeof name));
// Output :- Data type is string

// Numbers 
let marks = 18;
console.log("Data type is " + (typeof marks));
// Output:- Data type is number

// Boolean
let isDriver = true;
console.log("Data type is " + (typeof isDriver));
// Output :- Data type is boolean

// Null 
let nullVar = null;
console.log("Data type is " + (typeof nullVar));
// Output :- Data type is object

// Undefined 
let undef = undefined;
console.log("Data type is " + (typeof undef));
// output:- Data type is undefined

// Reference data types 

//  Arrays 
myVar = [1,2,3,4, false, "String"];
console.log("Data Type is " + (typeof myVar));
// output:-Data Type is object

//  Object literals 
let stMarks = {
    Deepak: 98,
    mohit: 99,
    randeep: 12
};
console.log(typeof stMarks);
// output:- object

// Function 
function findName() {
    
}
console.log(typeof findName);
// output:- function

// Date 
let date = new Date();
console.log(typeof date);
// output:- object