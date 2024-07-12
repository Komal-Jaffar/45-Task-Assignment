   //task #30 (HELLO ADMIN)

let username: string[] = ['admin', 'komal', 'muskan', 'hani', 'mirha'];
 for (let i=0; i < username.length; i++) {
   if(username[i] ==='admin') {
    console.log("Hello! admin, would you like to see a status report?");
   }
  else {
    console.log(`Hello! ${username[i]}, thankyou for logging in again.`);
  }

 }