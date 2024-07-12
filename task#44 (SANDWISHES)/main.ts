function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(singleItem => console.log("" + singleItem));
    console.log("\nNow Enjoy Sandwich");
}

//CALL THE FUNCTION 3 TIMES WITH 3 DIFFERENT NUMBER OF ARGUMENTS
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
