// Store Multiple Values with Arrays
var ourArray = ["Deepak",20];
var myArray = ["Sharma",1]

// Nested Arrays 
var OurArray = [["Hell", 100],["Heaven", 99]];

// Access Array Data With Indexes
var ourArray = [50,60,70];
var ourData = ourArray[0];
console.log(ourData)

// Modify Array Data With Indexes 
var ourArray = [18,64,99];
ourArray[1] = 45;
console.log(ourArray);

// Access Multi-Dimensiional Array With Indexes 
var myArray = [[2,3,4],[5,4,2],[3,5,6],[[3,2,1],2,7]];
var myData = myArray[3][0];
console.log(myData);

// Manipulate Arrays With push()
var myArray = [["Jhon", 23],["cat",2]];
myArray.push(["dog",3]);
console.log(myArray);

// Manipulate Arrays With pop()
var myArray = [["Jhon", 23],["cat",2]];
myArray.pop();
console.log(myArray);

// Manipulate Arrays with shift()
var myArray = [["Jhon", 23],["cat",2]];
myArray.shift();
console.log(myArray);

// Manipulate Arrays with unshift()
var myArray = [["Jhon", 23],["cat",2]];
myArray.unshift("Deepak");
console.log(myArray);

// Shopping list 
var myList = [["cereal",3], ["milk",2], ["bananas",3], ["juice",2], ["eggs",5]];
