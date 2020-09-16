// Switch Statements 
function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}
console.log(caseInSwitch(4));

// Default Option in  Switch Cause 
function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "boy";
            break;
        case "c":
            answer = "Cat";
            break;
        case "d":
            answer = "Dog";
            break;
        default:
            answer = "Stuff"
    }
    return answer;
}
console.log(switchOfStuff(1));

// Multiple Identification Options in Switch Statements 
function sequentialSizes(val) {
    var answer = "";
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    return answer;
}
console.log(sequentialSizes(5));

// Replacing If Else Chain With Switch 
function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "This is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}
console.log(chainToSwitch(99));

// Returning Boolean  Value from Functions 
function isLess(a, b){
    return a < b;
}
console.log(isLess(10,15));

// Returning Early pattern from Functions 
function abTest(a,b){

    if(a < 0 || b < 0){
        return undefined;
    }
    return "defined";
}
console.log(abTest(-1,2));

// Counting Cards 
var count = 0;
function cc(card){
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case "j":
        case "Q":
        case "k":
        case "A":
            count--;
            break;
    }
     var holdbet = "Hold";
     if(count > 0){
         holdbet = 'Bet';
     }
    return count + "" + holdbet;
}
cc(2); cc('k'); cc(10);cc('k');cc('A');
console.log(cc(4));