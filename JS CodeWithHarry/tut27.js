// Object oriented programing 
console.log('THis is tut27')

let car = {
    name: 'Maruti 800',
    topSpeed: 89,
    run: function () {
        console.log('Car is Runing')
    }
}
console.log(car.run);
// console.log(car)

// Creating a constructor for car

function GenralCar(name, topSpeed) {
    this.name = name;
    this.topSpeed = topSpeed;
    this.run = function () {
        console.log(`${this.name} is runing`);
    }
    this.analyze = function () {
        console.log(`This car is Slower by ${200 - this.topSpeed}KMPH Than Mercedes`);
    }

}

car1 = new GenralCar('Nissan', 180);

console.log(car1);



// I want to See the This function.
