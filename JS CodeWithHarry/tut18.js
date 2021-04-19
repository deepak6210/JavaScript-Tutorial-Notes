console.log('This is tut 18');
// let btn = document.getElementById('btn');
// btn.addEventListener('click', fun1);
// btn.addEventListener('mousedown', fun3);
// btn.addEventListener('dblclick', fun2);

// function fun1(e) {
//     // console.log("thanks", e);
//     e.preventDefault();
// }

// function fun2(e) {
//     console.log("thanks its a double click", e);
//     e.preventDefault();
// }
// function fun3(e) {
//     console.log("thanks its a mouse down", e);
//     e.preventDefault();
// }

// document.querySelector('.child').addEventListener('mouseenter', function(){
//     console.log("you entered no")
// })


document.querySelector('.container').addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor =  `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetY})`   
    console.log("you entered no")
})