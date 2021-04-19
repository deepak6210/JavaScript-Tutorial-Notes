// Type conversion and corsion in javascript 
console.log('welcome to tut 5 ');
let myVar;
myVar = String(34);
// console.log(myVar, typeof(myVar));

let booleanVar = String(true);
// console.log( booleanVar, typeof( booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr = [1,2,3,4,5];
// console.log(arr.length, (typeof arr));

let i = toString(true);
// console.log(i.toString());
// console.log(typeof i);

let stri = Number("3434");
// console.log(stri, (typeof stri));

let number = parseInt('34.098');
// console.log(number , (typeof number));

let num = parseFloat('34.787');
// console.log(num);

console.log(number.toFixed(5), (typeof number));

// Type coercion 

let mystr = '689';
let mynum = 34;

console.log(mystr + mynum);
