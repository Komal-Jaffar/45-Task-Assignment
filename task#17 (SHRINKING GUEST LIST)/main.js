"use strict";
//TASK#17
//SHRINKING GUEST LIST
let Guest_list = ["Usman", "Adeel", "Fariz"];
console.log("Good news! we've found a bigger dinner table, so more space is available. so our new guest are :\n");
Guest_list.unshift("Ali");
Guest_list.splice(2, 0, "Afnan");
Guest_list.push("Jahanzaib");
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
}
console.log("unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.\n");
while (Guest_list.length > 2) {
    let notInvited = Guest_list.pop();
    console.log(`sorry, Due to limited space we can't invite you to dinner Mr.${notInvited}\n`);
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
}
Guest_list.pop();
Guest_list.pop();
console.log(Guest_list);
