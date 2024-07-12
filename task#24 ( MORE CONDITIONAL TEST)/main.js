"use strict";
//TASK # 24 (MORE CONDITIONAL TEST)
Object.defineProperty(exports, "__esModule", { value: true });
let str1 = "Komal";
let str2 = "Jaffer";
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
//TEST FOR EQUALITY AND INEQUALITY WITH STRINGS
console.log("Tests for equality and inequality with strings:");
console.log(str1 === 'Komal');
console.log(str1 === str2);
//TEST USING THE LOWER CASE FUNCTION
console.log("\ntest using the lower case function:");
console.log(str1.toLowerCase() === 'komal');
console.log(str2.toLowerCase() !== 'jaffer');
//NUMERICALS TESTS
console.log('\nNumerical tests:');
console.log(1 < 2);
console.log(num1 >= num2);
console.log(num1 === 5);
console.log(num2 !== 10);
//TESTS USING "AND" and "OR" OPERATORS
console.log("\nTests using 'and' and 'or' operators:");
console.log((num1 < 10) && (num2 > 5));
console.log((num1 < 3) || (num2 > 15));
//TEST WHETHER AN ITEM IS IN AN ARRAY
console.log("\ntest whether an item is in an array:");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
//TEST WHETHER AN ITEM IS NOT IN  AN ARRAY
console.log("\ntest whether an item is not in an array:");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
