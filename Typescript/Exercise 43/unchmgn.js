// Function to make the magicians great
function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("The Great " + magicians[i]);
    }
    return greatMagicians;
}
// Function to show the magicians
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magicians' names
var magiciansArray = ["Ainak Wala Jin", "Harry Potter", "Aamil Junaid Bangali"];
// Make the magicians great and store the modified names in a separate array
var greatMagiciansArray = make_great(magiciansArray);
// Show the original magicians' names
console.log("Original Magicians:");
show_magicians(magiciansArray);
// Show the modified magicians' names with "The Great" added
console.log("\nModified Magicians:");
show_magicians(greatMagiciansArray);
