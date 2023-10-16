//step 2:
//store person name in a variable
const personName: string = "Friends";
// print the message using person's name
console.log(`Hello ${personName}, Welcome to my typescript diary!`);
console.log("Hello " + personName + ", Welcome to my typescript diary!");
//print the name in lowercase
console.log(`Hello ${personName.toLowerCase()}, Welcome to my typescript diary!`);
console.log("Hello " + personName.toLowerCase() + ", Welcome to my typescript diary!");
//print the name in uppercase
console.log(`Hello ${personName.toUpperCase()}, Welcome to my typescript diary!`);
console.log("Hello " + personName.toUpperCase() + ", Welcome to my typescript diary!");
//print the name in titlecase
const TitleCase = toTitleCase(personName);
console.log(`Hello ${TitleCase}, Welcome to my typescript diary!`);
console.log(`Hello ${toTitleCase(personName)}, Welcome to my typescript diary!`);
console.log("Hello " + toTitleCase(personName) + ", Welcome to my typescript diary!");
// Function to convert a string to title case
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

//function toTitleCase(str) {
  // The 'str' parameter is the input string that we want to convert to title case.
  
  // The `replace` method is used to find and replace substrings in the input string.
  // We use a regular expression to match each word in the string and perform the replacement.

  // The regular expression '\w\S*' matches a word, which consists of one or more word characters,
  // followed by zero or more non-space characters. In simpler terms, it matches the first word of each word group.

  // The 'g' flag in the regular expression stands for "global", which means that it will match all occurrences in the string.

  //return str.replace(/\w\S*/g, (txt) => {
    // The 'txt' parameter represents the matched word that needs to be converted to title case.
    
    // The arrow function here is used as a callback function for the 'replace' method.
    // It takes the matched word 'txt' and converts it to title case.
    
    // We use 'charAt(0)' to get the first character of the word and convert it to uppercase.
    // We use 'substr(1)' to get the rest of the characters in the word starting from the second character and convert them to lowercase.

    //return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  //});
//}
