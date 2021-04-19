console.log('Welcome to tutorial 14');

/* Element Selection
1. Single ELement Selector 
2. Multi element selector 
*/

// 1. Single ELement Selector 
let element = document.getElementById('first');
// element = element.className
// element = element.childNode
// element = element.parentNode
element.style.color = 'red';
element.innerText = 'Deepak is a good boy';
element.innerHTML = '<b>Deepak is a good boy</b>';

// console.log(element);

let sel = document.querySelector('#first');
sel = document.querySelector('.child')
sel = document.querySelector('b')
sel = document.querySelector('h1')
sel = document.querySelector('div')

sel.style.color = 'green'
// console.log(sel)

// 2. Multiple id selector 
// let elems = document.getElementsByClassName('child')
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div')
console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = "blue";
    
}


// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = "blue";
// });
// console.log(elems[0].getElementsByClassName('child') )





