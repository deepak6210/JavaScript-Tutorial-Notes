console.log("This is tut20");
let impArray = ['mohit', 'Deepak', 'amit']
//  add a key value inside local storage 
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('Sabzi', JSON.stringify(impArray));


// CLear the entire storage
// localStorage.clear();

// CLear particular key value player
localStorage.removeItem('Name2')


let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name);

sessionStorage.setItem('Name', 'Harry');
sessionStorage.setItem('Name2', 'Rohan');
sessionStorage.setItem('Sabzi', JSON.stringify(impArray));