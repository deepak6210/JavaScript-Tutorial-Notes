const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' '+ name);

let html;
html = '<h1> This is heading</h1>' + 
   "We are good";

html = html.concat(' this' , ' stsr2');
// console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html[0])

// console.log(html.indexOf('this'));
// console.log(html.lastIndexOf('<'));

// // console.log(html.endsWith('2'));
// console.log(html.charAt(3));
// console.log(html.includes('2'));

// console.log(html.substring(1,10))


// console.log(html.slice(-4));

// console.log(html.split(' '))

// console.log(html.replace('this', 'it'));

let fruits = 'Orange';
let fruits2 = 'Apple';
let myHtml = `Hello ${name}
          <h1> this is heading </h1>
          <p> YOu like ${fruit1} and ${fruits2}
              `;
document.body.innerHTML = myHtml