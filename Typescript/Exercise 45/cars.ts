// Function to store information about a car in an object
function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): string {
                                                                      //This is a function named createCar that takes three parameters: manufacturer
                                                                      // (a string representing the car's manufacturer), model (a string representing
                                                                      // the car's model), and ...options (a rest parameter that allows the function 
                                                                      //to accept multiple objects with any key-value pairs). The ...options parameter
                                                                      //is represented as an array of objects, where each object contains arbitrary 
                                                                      //key-value pairs with keys of type string and values of any type.
                                                                      
    let car: any = {                                                  //Inside the function, a variable car is declared and initialized with an object. 
      manufacturer: manufacturer,                                    //The object has three properties: manufacturer (assigned the value of the manufacturer parameter), 
      model: model,                                                 //model (assigned the value of the model parameter), and ...options. The spread operator ...options 
      ...options                                                   //is used to merge all the objects passed as arguments into the options array, effectively combining all the additional key-value pairs into the car object.
    };
    return car;
  }                                                                //The function returns the car object, which contains information about the car's manufacturer, model,
                                                                  //and any additional key-value pairs provided in the ...options array.
  
  // Call the function with the required information and additional name-value pairs
  let car1 = createCar("Toyota", "Corolla", { color: "Silver", year: 2021 });
  let car2 = createCar("Honda", "Civic", { color: "Red", features: ["Sunroof", "Leather seats"] });
  
  // Print the returned objects to check if the information was stored correctly
  console.log(car1);
  console.log(car2);
  
  