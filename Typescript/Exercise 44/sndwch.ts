// Function to summarize the sandwich order
function orderSandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    console.log("- Bread");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("- Bread\n");
  }
  
  // Call the function with different arguments
  orderSandwich("Lamb", "Cheese");
  orderSandwich("Turkey", "Arabian", "Tomato");
  orderSandwich("Chicken", "Mayonnaise", "Garlic", "Mustard");
  