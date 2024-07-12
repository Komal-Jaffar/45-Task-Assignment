"use strict";
//task#42
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
//CALLING THE FUNCTION TO MODIFY MAGICIAN NAME
let great_magicians = make_great(magician_names);
// CALL SHOW_MAGICAINS FUNCTION THAT SHOW MODIFIED LIST OF MAGICIANS
show_magicians(great_magicians);
