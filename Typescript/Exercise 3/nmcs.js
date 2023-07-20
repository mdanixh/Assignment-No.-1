//step 2:
//store person name in a variable
var personName = "Friends";
// print the message using person's name
console.log("Hello ".concat(personName, ", Welcome to my typescript diary!"));
//print the name in lowercase
console.log("Hello ".concat(personName.toLowerCase(), ", Welcome to my typescript diary!"));
//print the name in uppercase
console.log("Hello ".concat(personName.toUpperCase(), ", Welcome to my typescript diary!"));
//print the name in titlecase
console.log("Hello ".concat(toTitleCase(personName), ", Welcome to my typescript diary!"));
// Function to convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}
