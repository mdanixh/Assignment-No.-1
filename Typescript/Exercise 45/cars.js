var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Function to store information about a car in an object
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = __assign({ manufacturer: manufacturer, model: model }, options);
    return car;
}
// Call the function with the required information and additional name-value pairs
var car1 = createCar("Toyota", "Corolla", { color: "Silver", year: 2021 });
var car2 = createCar("Honda", "Civic", { color: "Red", features: ["Sunroof", "Leather seats"] });
// Print the returned objects to check if the information was stored correctly
console.log(car1);
console.log(car2);
