let marks = [34, 23, 24, 73, 77];
const fruits = ['Orange', "apple", "banana"];
const mixed = ['str', "98", [3,5]];

const arr = new Array(23, 123,21, 'Orange');
// console.log(mixed);
// console.log(marks[0]);
// console.log(arr);


// console.log(arr.length);
// console.log(Array.isArray(arr));
arr[0] = 'harry';
let arrelement = arr[0];
// console.log(arr);

let value = marks.indexOf(34);
// console.log(value);

// Mutating or modifying arrays
// marks.push(3564);
marks.unshift(23);
// console.log(marks);

marks.pop()
// console.log(marks)

marks.shift();
// console.log(marks);

// marks.splice(1,3);
// console.log(marks);

// marks.reverse()
// console.log(marks);

let marks2 = [1,2,34,4,7]
marks = marks.concat(marks2)
// console.log(marks);

let myobj = {
    name : 'Deepak',
    channel : "Deepak_Python",
    status : 'true' , 
    marks : "78"
}

console.log(myobj)
console.log(myobj['channel']);
console.log(myobj.channel);

