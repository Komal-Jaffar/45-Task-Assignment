type car = {
    manufacture: string
    model: string
    [key:string]: any;
}



//DEFINE FUNCTION TO CREATE A CAR OBJECT WITH OPTIONAL OPTIONS 
function createCar(manufacture:string, model:string, optional: Record<string, any>): car{
  return {
    manufacture,
    model,
    ...optional  
  }
}

const mycar: car = createCar("Toyota", "Corolla", {color: "silver", year: "2024"})
console.log(mycar)