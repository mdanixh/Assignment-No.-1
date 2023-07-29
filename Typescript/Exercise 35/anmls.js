//Make an array of animals having the same characterstics and print statement for each animal and print a statement at the end that Any of these animal can make a great pet.
var animals = ["Dog", "Cat", "Goat"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("A ".concat(animal.toLocaleLowerCase(), " would make a great pet."));
}
console.log("Any of these animals would make a great pet!");
