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