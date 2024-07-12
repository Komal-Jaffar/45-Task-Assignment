   //task 31

   //STEP ---> 1
   //CREATING A ARRAY WITH 5 VALUES
let userName = ["komal", "muskan", "afnan", "ali", "hina"]

// IF STATEMENT FOR CHECKING LENGTH OF OUR ARRAY IS EMPTY ?
if (userName.length ===0) {
    console.log("Your Array is empty we need to find some users!");
} else{
   // IF ARRAY IS NOT EMPTY USING LOOP ON ARRAY
    for (let i=0; i < userName.length; i++) {
        if(userName[i] ==='admin') {
         console.log("Hello! admin, would you like to see a status report?");
        }
       else {
         console.log(`Hello! ${userName[i]}, thankyou for logging in again.`);
       }
     
      }
}

//STEP ---> 2

//CREATING A ARRAY WITH 5 VALUES
let names = ["komal", "muskan", "afnan", "ali", "hina"]

//REMOVE ALL VALUES FROM OUR ARRAY NOW OUR ARRAY IS EMPTY
names =[]

// IF STATEMENT FOR CHECKING LENGTH OF OUR ARRAY IS EMPTY ?
if (names.length ===0) {
    console.log("\nYour Array is empty we need to find some users!\n");
} else{
   // IF ARRAY IS NOT EMPTY USING LOOP ON ARRAY
    for (let i=0; i < names.length; i++) {
        if(names[i] ==='admin') {
         console.log("Hello! admin, would you like to see a status report?");
        }
       else {
         console.log(`Hello! ${names[i]}, thankyou for logging in again.`);
       }
     
      }
}