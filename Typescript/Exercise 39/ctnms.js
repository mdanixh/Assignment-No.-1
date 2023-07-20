//City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
//"Lahore, Pakistan"
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
//Calling the function with city_country pairs.
var city1 = city_country("Islamabad", "Pakistan");
var city2 = city_country("Paris", "France");
var city3 = city_country("Ankara", "Turkey");
console.log(city1);
console.log(city2);
console.log(city3);
