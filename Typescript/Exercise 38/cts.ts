//Make a function that describes the each city in the string wiht their country
function describe_cities(cities: string, country: string = "Pakistan"): void {
console.log(`${cities}, is in ${country}`);
}

describe_cities("Quetta");
describe_cities("Karachi");
describe_cities("Amsterdam", "Netherlands");