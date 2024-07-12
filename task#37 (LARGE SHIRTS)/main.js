"use strict";
//task #37
//MAKING A FUNCTION
function make_shirt(size = "Large", printMessage = "I love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
//CALLING FUNCTION WITH BY DEFAULT MESSAGE
make_shirt();
//CALLING A FUNCTION NOW WITH MEDIUM SIZE SHIRT
make_shirt("Medium");
// CALLING A FUNCTION NOW WITH SMALL SIZE AND ALSO PRINT A DIFFERENT MESSAGE
make_shirt("Small", "I love Javascript");
