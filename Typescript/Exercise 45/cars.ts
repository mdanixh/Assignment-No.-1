// Function to store information about a car in an object
function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): any {
    let car: any = {
      manufacturer: manufacturer,
      model: model,
      ...options
    };
    return car;
  }
  
  // Call the function with the required information and additional name-value pairs
  let car1 = createCar("Toyota", "Corolla", { color: "Silver", year: 2021 });
  let car2 = createCar("Honda", "Civic", { color: "Red", features: ["Sunroof", "Leather seats"] });
  
  // Print the returned objects to check if the information was stored correctly
  console.log(car1);
  console.log(car2);
  
  