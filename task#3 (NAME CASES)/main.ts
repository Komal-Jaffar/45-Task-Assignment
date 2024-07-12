
const personName = "komaL Jaffer";

//FOR LOWER CASE:
console.log("\nLower Case\n", personName.toLowerCase());

//FOR UPPER CASE:
console.log("\nUpper Case\n", personName.toUpperCase());

//FOR TITLE CASE:
console.log("\nTittle Case:\n", personName.replace(/\b\w/g,c=>c.toUpperCase()));