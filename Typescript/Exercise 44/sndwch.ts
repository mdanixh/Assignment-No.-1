// Function to summarize the sandwich order
function orderSandwich(...items: string[]): void {  //This is a function named orderSandwich that takes a variable number of arguments represented
                                                    //by the rest parameter ...items: string[]. The rest parameter ...items allows the function to 
                                                    //accept any number of string arguments and store them in an array called items.
    console.log("Sandwich order summary:");
    console.log("- Bread");                         //This line prints a hyphen and the word "Bread" on the console, indicating that bread is a common part of all sandwich orders.
    for (let item of items) {                      //This is a for...of loop that iterates over each element in the items array. The loop uses the variable item to represent each element of the array.
      console.log(`- ${item}`);                   //Inside the loop, for each item in the items array, the function prints a hyphen and the item's name on the console.
    }
    console.log("- Bread\n");                    //After the loop, this line prints the closing part of the sandwich order, which is again the bread, on the console, followed by a new line to separate the summary of each sandwich order.
  }
  
  // Call the function with different arguments
  orderSandwich("Lamb", "Cheese");
  orderSandwich("Turkey", "Arabian", "Tomato");
  orderSandwich("Chicken", "Mayonnaise", "Garlic", "Mustard");
  