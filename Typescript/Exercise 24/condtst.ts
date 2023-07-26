//Test for euqality and inequality with strings 

let personName = 'Meekail';
console.log("Is personName == 'Burhan'? I predict False.");
console.log(personName == 'Burhan');

console.log("is personName == 'Meekail'? I predict True.");
console.log(personName == 'Meekail');

console.log("Is personName == 'Abdullah'? I predict False.");
console.log(personName == 'Abdullah');

console.log("Is personName !== 'Burhan'? I predict True.");
console.log(personName !== 'Burhan');

console.log("Is personName !== 'Arham'? I predict True.");
console.log(personName !== 'Arham');

console.log("Is personName === 'Adnan'? I predict False.");
console.log(personName === 'Adnan');

console.log("Is personName === 'Meekail'? I predict True.");
console.log(personName === 'Meekail');

//Test using the Lowercase function
let message = 'HELLO!';
console.log("is message.toLowerCase() == 'hello!'?, I predict True.");
console.log(message.toLowerCase() == 'hello!');

console.log("Is message.toLowerCase() == 'goodbye'?, I predict false.");
console.log(message.toLowerCase() == 'good');
//Test using the Uppercase Functionz
console.log("is message.toUpperCase() == 'HELLO!'?, I predict true.");
console.log(message.toUpperCase() == 'HELLO!');

//Numerical Test
let age = 29;

console.log("Is age == 29? I predict True.");
console.log(age == 29);

console.log("Is age == '39'? I predict False.");
console.log(age == 39);

console.log("Is age != 39? I predict True.");
console.log(age != 39);

console.log("Is age > 28? I predict True.");
console.log(age > 28);

console.log("Is age < 39? I predict True.");
console.log(age < 39);

console.log("Is age > 39? I predict False.");
console.log(age > 39);

console.log("Is age >= 25? I predict True.");
console.log(age >= 25);

console.log("Is age <= 24? I predict False.");
console.log(age <= 24);

//Test using "and" and "or" operators
let x = 10
let y = 5

console.log("Is x > 8 and y < 6. I predict True.");
console.log(x > 8 && y < 6);

console.log("Is y > 10 and x < 5. I predict False.");
console.log(y > 10 && x < 5);

console.log("Is x < 12 or y > 4. I predict True.");
console.log(x < 12 || y > 4 );

//Test whether an item is in an array
const appraisal = ['A','B+', 'B', 'C'];

console.log("Is 'A' in the appriasal's array? I predict True.");
console.log(appraisal.indexOf('A') !== -1);
//console.log(appraisal.indexOf('A') !== -1);: This line performs 
//the actual check. The indexOf('A') method is used to find the
//index of the letter 'A' in the appraisal array. If 'A' is present, 
//it will return the index of 'A', which is 0 in this case because it
// is the first element in the array.

//The comparison appraisal.indexOf('A') !== -1 checks if the index of 
//'A' is not equal to -1. If 'A' is found in the array, the index will
//be a non-negative number, so the comparison will be true. If 'A' is 
//not found in the array, indexOf('A') will return -1, and the 
//comparison will be false.

//In this specific case, since 'A' is present in the array at index 0,
//the comparison appraisal.indexOf('A') !== -1 evaluates to true.

console.log("Is 'D' in the appriasal's array? I predict False.");
console.log(appraisal.indexOf('D') !== -1);


//Test whether an item is not in an array
console.log("Is 'D' is not in the appraisal's array? I predict True.");
console.log(appraisal.indexOf('D') !== -2);
//console.log(appraisal.indexOf('D') !== -2);: This line performs the
//check. The indexOf('D') method is used to find the index of the 
//letter 'D' in the appraisal array. If 'D' is not present, it will
// return -1.

//The comparison appraisal.indexOf('D') !== -2 checks if the index of
//'D' is not equal to -2. If 'D' is not found in the array, 
//indexOf('D') will return -1, and the comparison will be true.

//In this case, since 'D' is not present in the array, the comparison
// appraisal.indexOf('D') !== -2 evaluates to true.

//additional '!==' operator

console.log(5 !== 5);
console.log(10 !== 10);

