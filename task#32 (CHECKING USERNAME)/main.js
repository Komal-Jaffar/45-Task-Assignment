"use strict";
//task #32
//ARRAR OF CURRENT USER
let current_users = ["komal", "uskan", "Jhanzaib", "Ali", "Afnan"];
//ARRAY OF NEW USER
let new_users = ["Alizy", "Laiba", "Komal", "Aqsa", "Ali"];
//LOOP THROUGH NEW USER TO CHECK FOR USERNAME AVAILIBILITY
new_users.forEach(new_one_user => {
    //MAKING A CONDITION FOR USERNAME ALREADY EXIST AND SAVE IN OUR_CONDITION VARIABLE
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    // PRINT DIFFERENT MESSAGE USING IF ELSE STATEMENTS
    if (our_condition) {
        console.log(`Sorry! ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
