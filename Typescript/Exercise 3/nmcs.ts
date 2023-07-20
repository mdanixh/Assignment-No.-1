//step 2:
//store person name in a variable
const personName: string = "Friends";
// print the message using person's name
console.log(`Hello ${personName}, Welcome to my typescript diary!`);
//print the name in lowercase
console.log(`Hello ${personName.toLowerCase()}, Welcome to my typescript diary!`);
//print the name in uppercase
console.log(`Hello ${personName.toUpperCase()}, Welcome to my typescript diary!`);
//print the name in titlecase
console.log(`Hello ${toTitleCase(personName)}, Welcome to my typescript diary!`);
// Function to convert a string to title case
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}