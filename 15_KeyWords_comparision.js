// Differenecs Between the var and let keywords 
// Let don't allow you to decalre a same variable again
/*let catName = "Quincy";
let quote;

var catName = "Beau";

function catTalk(){
    "use strict";// This Enable Strict mode which Catch's Comman coding mistake and usafe action

    catName = "Oliver"
    quote = catName + " says Meow!";
}
catTalk();*/

// Compare Scopes of the var and let Keywords 
// When we declare the varibale with var it is declare globally or locally when declare inside a function 
// the Scope of let is limited with in the blocks statement's that's it was declare in 
function checkScope() {
    "use strict"
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is:", i);
    return i;
}

checkScope();

// Declare a Read only Variable wioth the cosnt Keyword
// If you declare a varible using const keyword you can't Assign it again...! 
/*function printManyTimes(str){
    "use strict"
    const SENTENCE = str + "is cool!"
    sentence = str + "is amazing"
    for(var i = 0; i < str.length; i +=2){
        console.log(sentence);
    }
}
printManyTimes("freeCodeCamp");*/

// Mutate an Array declared with const 
const s = [5, 7, 2];
function editInPlace() {
    "use strict";

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(s)

// Prevent Object Mutatoion 
function freezeObj(){
    "use strict"
    const MATH_CONSTANTS ={
        PI: 3.14    
    };
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

// Use Arrow Functions to Write Concise Anonymous Functions 
const magic = () => new Date();

// Write Arrow Function with Paramneters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

// Write Higher Order Arrow Function 
const realNumberArray = [4, 5.6, -9.8, 3.14, 33,34,3 , -6]

const squareList =(arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

// Default Parameter 
const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    }
})();
console.log(increment(5,2))
console.log(increment(5))


// use the Rest Operator with Function Parameters
const sum = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a+b, 0);
    };
})();
console.log(sum(1,2,3,4));
