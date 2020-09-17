// Objects are similar to array just instied of using index's to excess data we use properties 
var ourDog = {
    "name": "Jackie",
    "leg's": 4,
    "tails": 1,
    "Friends": ["everything!"]
};

// Acessing Object Properties with Dot Notation
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes":"cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

// Accessing Objects properties with Bracket Notation 
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
console.log(entreeValue);
console.log(drinkValue);

//  Accessing Object Properties with Variable 
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];

// Updating Object Properties 
var ourDog = {
    "name": "Jackie",
    "leg's": 4,
    "tails": 1,
    "Friends": ["everything!"]
};
ourDog.name = "Happy Camper";

// Add New Properties to an object 
var ourDog = {
    "name": "Jackie",
    "leg's": 4,
    "tails": 1,
    "Friends": ["everything!"]
};
ourDog.bark = "bow-wow";

// Delete Properties From an Object 
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "trails": 1,
    "friends": ["everythings!"],
    "barks": "bow-bow"
};
delete ourDog.bark;

//  Using Objects For lookups 
function phoneticLookup(val){
    var result = ""

    var lookup = {
        "Deepak": "Sharma",
        "Randeep": "Jangra",
        "Mohit": "Kantiwal",
        "Amit": "Bansal"
    }
    result = lookup[val];

    return result;
}
console.log(phoneticLookup("Deepak"));

// Testing Objects For Properties 
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }else {
        return "Not Found"
    }
}
console.log(checkObj("pet"));

// Manipulating Complex Objects 
var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "piano Man",
        "release_year": 1973,
        "formats":[
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "beau carnes",
        "title": "Cereal Man"
    }
];

// Accessing Nested Objects 
var myStorage = {
    "car": {
        "inside":{
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "truck": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents)

// Accessing Nested Arrays 
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pipes",
            "birch"
        ]
    }
];
var secoundTree = myPlants[1].list[1]
// console.log(secoundTree);

// Record Collection 
var collection = {
    "2548": {
        "album": "slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let it Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
}; 

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    }else if (prop == "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }else {
        collection[id][prop] = value;
    }
    return collection;
}
console.log(updateRecords(2468, "tracks","test"));
// console.log(updateRecords(5439,"artist","ABBA"));

