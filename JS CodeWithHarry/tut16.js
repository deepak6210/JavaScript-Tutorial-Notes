console.log('this is tut 16 Creating , Removing and Replacing Elments');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);
//  Add the class name to the li element 
element.className = 'deepak';
element.id = "deepakli";
element.setAttribute('title','Mytitle');
// element.innerText = "<b>Hello this is created by deepak</b>"
// element.innerHTML = "<b>Hello this is created by deepak</b>"

let ul = document.querySelector('ul.this');
ul.appendChild(element);
// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3')
elem2.id = 'elem2';
elem2.className = 'elem22'

let tnode = document.createTextNode('This is created node for element 2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'))
let pr = elem2.hasAttribute('class');
elem2.removeAttribute('id')
console.log(pr)

// Quick  quizz 
// Create a heading element with the text "go to google"
// and create a tag outside it with 
// href = "ww.google.com" 
