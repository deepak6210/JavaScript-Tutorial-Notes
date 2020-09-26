// Challenge 1 : Your ages in days 
function ageInDays() {
    var birthYear = prompt("What year were you born.... Good Friend?"); 
    var ageInDayss = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss +` Day's old`)
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

// Challenge 2:cat generator 
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById("flex-cat-gen");
    image.src = "Images/cat.jpg";
    div.appendChild(image);
}
// Challenge 3 Rock , paper Scissors
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt()); 
    console.log('Computer choice:',botChoice)
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id , botChoice, message);
};
function randToRpsInt() {
   return Math.floor(Math.random() * 3);
};

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
};

function decideWinner(yourChoice, computerChoice){
      var rpsDatabase = {
          'rock':{'scissors': 1, 'rock': 0.5, 'paper': 0},
          'paper':{'rock': 1,'paper': 0.5, 'scissors': 0},
          'scissors':{'rock': 0,'paper': 1,'scissors': 0.5}
      }
      var yourScore = rpsDatabase[yourChoice][computerChoice];
      var computerScore = rpsDatabase[computerChoice][yourChoice];
      return [yourScore, computerScore];
}
function finalMessage([yourScore, computerScore]){
    if(yourScore === 0) {
        return {'message':'You lost!','color': 'red'};
    }else if (yourScore === 0.5){
        return {'message':'You tied!','color': 'yellow'};
    }else(yourScore === 1)
        return {'message':'You Won!','color': 'green'};
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }  
    // Lets Remove all the images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML= "<img src='" + imagesDataBase[humanImageChoice] + "' height =150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: "+ finalMessage['color'] + ";font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML= "<img src='" + imagesDataBase[botImageChoice] + "' height =150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}