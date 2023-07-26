//Your Own Array Task
const motorbikes: string[] = ["BMW R1200", "Banelli TRK 502", "Yamaha YBR 125G"];
//For Loop with Index (for (let i = 0; i < motorbikes.length; i++)):
// This is a traditional for loop that uses an index variable i to access each element of the motorbikes
// array using its position. The loop continues as long as the index i is less than the length of the motorbikes
// array (motorbikes.length). The i variable is incremented in each iteration (i++) to move to the next element.
for (let i = 0; i < motorbikes.length; i++) {
  console.log("I would like to owan a " + motorbikes[i] + ".");
}
//For...of Loop (for (const motorbike of motorbikes)):
//The for...of loop is a more modern and concise way to iterate over arrays in JavaScript and TypeScript. 
//Instead of dealing with indices directly, the loop assigns the value of each element directly to the variable 
//motorbike (in this case). You use the of keyword to denote that you are iterating over the values of the array,
// not the indices.
for (const motorbike of motorbikes) {
  console.log(`I would like to own a ${motorbike}.`)
}

//The output of this loop would also be the same as the output of the first loop. Using the for...of loop
// can make the code more readable and less error-prone since you don't have to deal with the index manipulation explicitly.

//In summary, the primary difference lies in the syntax and the way you access the elements of the array.
// The for...of loop is generally favored for iterating over arrays as it provides a cleaner and more concise syntax, 
//and it reduces the risk of off-by-one errors when dealing with indices. However, both loops achieve the same result 
//in this specific scenario.