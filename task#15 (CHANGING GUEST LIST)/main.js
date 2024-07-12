"use strict";
let Guest_list = ["Komal", "Muskan", "Laiba"];
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} :   \n you are invited to dinner! \n `);
}
;
console.log(`unfortunately ${Guest_list[1]}, can't come to dinner."`);
Guest_list[1] = "Aqsa";
console.log("\nNEW LIST OF INVITATION : \n");
for (let j = 0; j < Guest_list.length; j++) {
    console.log(`Dear ${Guest_list[j]} :   \n you are invited to dinner! \n `);
}
;
