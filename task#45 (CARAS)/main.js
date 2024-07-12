"use strict";
//DEFINE FUNCTION TO CREATE A CAR OBJECT WITH OPTIONAL OPTIONS 
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("Toyota", "Corolla", { color: "silver", year: "2024" });
console.log(mycar);
