//Create an array of your favorite flavors of pizzas and use a for loop to print statements of your pizza flavor string and at the end print a statement that how much you like pizza!
var pizzas = ["Pepperoni", "Margherita", "Supreme"];
for (var _i = 0, pizzas_1 = pizzas; _i < pizzas_1.length; _i++) {
    var pizza = pizzas_1[_i];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("I like pizza very much");
