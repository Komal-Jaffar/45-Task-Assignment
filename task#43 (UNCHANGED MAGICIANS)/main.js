"use strict";
//task#43
//DEFINE A FUNCTION TO PRINT EACH MAGICIAN NAME FROM AN ARRAY
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//FUNCTION TO MAKE_MAGICIANS GREAT THROUGH .MAP() IT WILL MODIFY ARRAY
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//DEFINE AN ARRAY CONTAINING MAGICIANS NAME
let magician_names = ["Harry Poter", "Komal", "Ali"];
//MAKING A COPY OF ORIGINAL ARRAY THROUGH .SLICE() FUNCTION
let copy_magician_names = magician_names.slice();
//MODIFY THE COPIED ARRAY TO INCLUDE "THE GREAT" WITH THEIR NAMES
let copy_great_magicians = make_great(copy_magician_names);
// SHOW BOTH ARRAYS ORIGINAL AND COPIED
show_magicians(magician_names);
//ORIGINAL
console.log("Original Array\n");
//COPIED
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
