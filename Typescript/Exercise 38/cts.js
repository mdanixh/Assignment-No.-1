//Make a function that describes the each city in the string wiht their country
function describe_cities(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, ", is in ").concat(country));
}
describe_cities("Quetta");
describe_cities("Karachi");
describe_cities("Amsterdam", "Netherlands");
