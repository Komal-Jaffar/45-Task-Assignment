interface type {
   name:string,
    age:number,
     profession:string
}

let myself:type = {
   name:"komal", 
   age:24,
    profession:"student"
   };
   
console.log(`\n Object containing information about me: \n`);

console.log(`My name is: ${myself.name}`);
console.log(`I am ${myself.age} year old`);
console.log(`I am a ${myself.profession}`);
