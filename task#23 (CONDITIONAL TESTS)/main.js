"use strict";
//TASK 23 10 conditional test
let car = "subaru";
console.log("\n----> 5 tests evaluate to true:");
//TEST 1
console.log("Is car == 'subaru'? I predic true.");
console.log(car === 'subaru');
//TEST 2
console.log("Is car != 'toyota'? I predic true.");
console.log(car !== 'toyota');
//TEST 3
console.log("Is the length of car > 4? I predic true.");
console.log(car.length > 4);
//TEST 4
console.log("Is the length of car <= 6 ? I predic true.");
console.log(car.length <= 6);
//TEST 5
console.log("Does car start with 's' ? I predic true.");
console.log(car.startsWith('s'));
console.log("\n----> 5 tests evaluate to false.");
//TEST 1
console.log("Is car == 'honda'? I predict false.");
console.log(car === 'honda');
//TEST 2
console.log("Is car in uppercase? I predict false.");
console.log(car.toUpperCase() === car);
//TEST 3
console.log("Is car === 'Subaru'? I predict false.");
console.log(car.toUpperCase() === car);
//TEST 4
console.log("Is car == 'Audi'? I predict false.");
console.log(car === 'Audi');
//TEST 5
console.log("Is the length of car === 7? I predict false.");
console.log(car.length === 7);
