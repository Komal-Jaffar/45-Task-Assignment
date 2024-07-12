 //task#41
//DEFINE A FUNCTION TO PRINT EACH MAGICIAN NAME FROM AN ARRAY
  function show_magicians(magicians:string[]){
     magicians.forEach(name => console.log(name));
  }
//DEFINE AN ARRAY CONTAINING MAGICIANS NAME
let magician_names = ["Harry Poter", "Komal", "Ali"];

//CALLING THE FUNCTION TO PRINT EACH MAGICIAN NAME
show_magicians(magician_names);