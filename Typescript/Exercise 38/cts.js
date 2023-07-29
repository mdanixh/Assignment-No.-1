//Make a function that describes the each city in the string wiht their country
function describe_cities(cities, country) {
    if (cities === void 0) { cities = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, ", is in ").concat(country));
}
describe_cities();
describe_cities("Quetta");
describe_cities("Amsterdam", "Netherlands");
