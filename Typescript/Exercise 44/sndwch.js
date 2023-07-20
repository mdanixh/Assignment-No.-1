// Function to summarize the sandwich order
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich order summary:");
    console.log("- Bread");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("- Bread\n");
}
// Call the function with different arguments
orderSandwich("Lamb", "Cheese");
orderSandwich("Turkey", "Arabian", "Tomato");
orderSandwich("Chicken", "Mayonnaise", "Garlic", "Mustard");
