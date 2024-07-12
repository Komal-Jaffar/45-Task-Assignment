//TASK 16
// MORE GUEST LIST

let Guest_list : string[] = ["Komal", "Muskan", "Laiba" ];

console.log("\nNEW LIST OF INVITATION : \n");

 for (  let j=0; j< Guest_list.length; j++){
    console.log(`Dear ${Guest_list[j]} :   \n you are invited to dinner! \n `);
     };

     console.log("Good news! we've found a bigger dinner table, so more space is available. so our new guest are :\n");

     Guest_list.unshift("Ali");
     Guest_list.splice(2, 0, "Afnan");
     Guest_list.push("Aqsa");

     for (let i=0; i < Guest_list.length; i++){
        console.log(`Dear ${Guest_list[i]} : \n you are invited to dinner! \n`);
     }