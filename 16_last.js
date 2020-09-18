// Use the Spread Operator To evalute Arrays In-Place 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'May'];
let arr2;
(function() {
    arr2 = [...arr1];
    arr1[1] = 'potato'
})();
console.log(arr2);


// Use Destructuring Assignment to Assign Variables from Objects 
var voxel = {x:3.6,y: 7.4, z: 6.54}

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const {xa: a, y : b, z : c} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tommorow: 79
};
function getTempOfTmrw(avgTempartures){
    "use strict"
    const { tommorow : tempOfTomorrow } = avgTempartures;
    return tempOfTomorrow;
    }
console.log(getTempOfTmrw(AVG_TEMPERATURES));


// Destructuring Assignment with Nested Objects 
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tommorow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";
    const { tommorow : { max : maxOfTomorrow }}= forecast;
    return maxOfTomorrow; 
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));


// Use Destructuring Assignment to Assign Varible from Arrays 
const [z,x, ,y] = [1,2,3,4,5,6,7,8];
console.log(z, x, y);

let a = 8, b = 6;
(() => {
    "use strict"
    [a,b] = [b,a]
})();
console.log(a);
console.log(b);

// Use Destructuring Assignment with the Rest Operator 

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

// Use Destructuring Assignment to Pass an Objects as a Function's Parameters
const stats = {
    max: 56.5,
    standard_deviation: 4.34,
    median: 34.5,
    min: -0.75
};
const half = (function(){
    return function half({max , min}){
        return(max + min )/ 2.0;
    };
})();
console.log(stats);
console.log(half(stats));

// Create String using Tempalte Literals 
const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting =`Hello, my name is ${person.name}! 
I am ${person.age} years old`;
console.log(greeting);


const result = {
    success: ["max-length", "no-amd","prefer-arrow-function"],
    failure: ["no-var","var-on-top","linebreak"],
    skipped: ["id-blacklist","no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li class = "text-warning">${arr[i]}</li>`);
       }

    return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

// write Concise Object Literral Declarations using Simple Fields 
const CreatePerson = (name, age, gender) => ({name, age, gender});
console.log(CreatePerson("Zodic Hasbro", 56, "male"));

// Write Concise Declarative Functions
const bicycle = {
    gear: 2,
    setGear(newGear){
        "use strict"
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear);

// Use  class Syntax to Define a Constructor Function 
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('jupiter');

console.log(zeus.targetPlanet);

// Use getters and setters ti Control Access to an Objects 
function makeClass(){
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temprature(){
            return this._temp;
        }
        set temprature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temprature;
thermos.temprature = 26;
temp = thermos.temprature;
console.log(temp);



