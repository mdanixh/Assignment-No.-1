function make_great(magicians: string[]): void {
    for(let i = 0; i < magiciansArray.length; i++) {       //for (let i = 0; i < magiciansArray.length; i++) { ... }:
                                                        //This is a for loop that iterates over each element in the magicians array. 
                                                        //The loop uses the variable i as the loop counter, which starts from 0 and 
                                                        //increments by 1 in each iteration. The loop continues as long as i is less than 
                                                        //the length of the magicians array (magiciansArray.length).
        magicians[i] = "The Great " + magicians[i];     //magicians[i] = "The Great " + magicians[i];:
                                                        //Inside the loop, this line of code modifies each element in the magicians array. 
                                                        //It prepends the string "The Great " to the current magician's name at index i. 
                                                        //So, for each magician in the array, the function adds the prefix "The Great " to their 
                                                        //name.
    }
}

        //The function doesn't have a return statement, and its return type is void, which means it doesn't explicitly return any value. 
        //Instead, the function modifies the magicians array in-place by adding the "The Great " prefix to each magician's name.
function show_Magicians(magicianArray: string[]): void {
    for(let magician of magiciansArray) {
        console.log(magician);
    }
}
//Example array of magicians
const magiciansArray: string[] = ["Ainak Wala Jin", "Harry Potter", "Aamil Junaid Bangali"];  

//Call make_great() to moidify the magicians names
make_great(magiciansArray);

//Call show_magician() to display the modified names
show_Magicians(magiciansArray);