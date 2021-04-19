const mygreet = function(name, thank= `thank a lot`){
    let msg = `Happy Birthday ${name}. ${thank}`
    return msg;
}
let name = 'Deepak';
let val = mygreet(name, "thanks a lot");
console.log(val);

const myobj = {
    name: 'skillF',
    game: function(){
       return 'GTA';
    }
}

console.log(myobj.game())

arr = ['fruit','vegetable','furniture']

arr.forEach(function(element, index, array ){
console.log(element,index, array)
});

// what is scope in javascript ..?
