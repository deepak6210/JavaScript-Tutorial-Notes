console.log("THis is tut 25");

let divElem = document.createElement('div');
let text = document.createTextNode('This is my element click to edit.')
divElem.appendChild(text);
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding: 23px;' )

// Grab the main Conatiner 
let container = document.querySelector('.container');
let first = document.getElementById('myfirst')


//  insert the element before the id first 
container.insertBefore(divElem, first);


divElem.appendChild(text);
console.log(divElem,container,first);



// add event listener to div Element

divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementByCLassNAme =
    let html = elem.innerHTML;
    divElem.innerHTML =  `<textarea class='textarea' id = 'textarea' row='3'>${html}</textarea>`
})