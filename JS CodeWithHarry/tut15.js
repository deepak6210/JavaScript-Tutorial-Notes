console.log('welcome to tut15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// let nodeName = cont.childNodes[1].nodeName;
// console.log(nodeName);
// let nodetype = cont.childNodes[1].nodeType;
// console.log(nodetype);

// Node types 
// 1. elements 
// 2. attribute 
// 3. text node 
// 8. comments 
// 9. doccumnets 
// 10. doctype

// console.log(cont.childNodes);
// console.log(cont.children);

let container = document.querySelector('.container');

// console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);
// console.log(container.childElementCount); // count of chid element 

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);

console.log(container.firstElementChild.nextElementSibling);










