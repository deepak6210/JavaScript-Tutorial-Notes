function wordBlanks(myNoun, myAjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAjective +" "+ myNoun +" "+ myVerb + " to the store " + myAdverb;

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("Bike", "slow", "flew", "slowley"));

