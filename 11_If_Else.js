// Else Statement 
function testElse(val){
    var result;
    if (val > 5) {
       result = "Bigger than 5"
    }else{
      result = "5 or Smaller"
    }
    return result;
}
console.log(testElse(4));

// Else If Statement 
function testElseIf(val){
    if (val > 10){
        return "Greater than 10";
    }else if(val < 5){
        return "Smaller than 5"
    }else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

// Logical Order in If Else Statements
function testElseIf(val){
    if (val < 5){
        return "Less than 5";
    }else if(val < 10){
        return "Less than 10"
    }else {
        return "Greater than or equal to 10";
    }
}
console.log(testElseIf(3));

// Changing if Else Statements 
function fullFillCondition(num){
    if(num < 5){
        return "Tiny";
    }
    else if(num < 10){
        return "small";
    }
    else if(num < 15){
        return "Medium";
    }
    else if(num < 20){
        return "Large";
    }
    else{
        return "Huge";
    }

}
console.log(fullFillCondition(20));

// Golf Code 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "bogey","Double Boget" ,"Go Home!"]
function golfScore(par , strokes){
    if(strokes == 1){
        return names[0];
    }else if(strokes <= par -2){ 
        return names[1];
    }else if(strokes == par -1){ 
        return names[2];
    }else if(strokes == par){ 
        return names[3];
    }else if(strokes == par + 1){ 
        return names[4];
    }else if(strokes == par + 2){ 
        return names[5];
    }else if(strokes <= par + 3){ 
        return names[6];
    }
}
console.log(golfScore(5, 4));




