// Function to make the magicians great
function make_great(magicians: string[]): string[] {    //This is a function named make_great, which takes an array of strings magicians as input and returns an array 
                                                        //of strings (string[]). The purpose of this function is to transform the magicians' names and add 
                                                        //"The Great " prefix to each name.
    let greatMagicians: string[] = [];                  //Inside the make_great function, a new array greatMagicians is declared and initialized as an empty array. 
                                                        //This array will store the modified names of the magicians with the "The Great " prefix.       
  
    for (let i = 0; i < magicians.length; i++) {        //This is a for loop that iterates over each element in the magicians array. The loop uses the variable i as 
                                                        //the loop counter, which starts from 0 and increments by 1 in each iteration. The loop continues as long as
                                                        //i is less than the length of the magicians array (magicians.length).
      greatMagicians.push("The Great " + magicians[i]); //Inside the loop, for each magician's name at index i in the magicians array, the function adds "The Great " 
                                                        //prefix to the name and pushes the modified name into the greatMagicians array using the push() method.
    }
  
    return greatMagicians;                              //After the loop is completed, the function returns the greatMagicians array, which contains all the magicians' names with "The Great " prefix.
  }
  
  // Function to show the magicians
  function show_magicians(magicians: string[]): void { //This is another function named show_magicians, which takes an array of strings magicians as input and doesn't return any value (void). 
                                                      //The purpose of this function is to display the elements of the input array (magicians' names) on the console.
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  // Array of magicians' names
  let magiciansArray: string[] = ["Ainak Wala Jin", "Harry Potter", "Aamil Junaid Bangali"];
  
  // Make the magicians great and store the modified names in a separate array
  let greatMagiciansArray: string[] = make_great(magiciansArray);   //This calls the make_great function with magiciansArray as an argument and stores the returned modified array in greatMagiciansArray.
  
  // Show the original magicians' names
  console.log("Original Magicians:");
  show_magicians(magiciansArray);
  
  // Show the modified magicians' names with "The Great" added
  console.log("\nModified Magicians:"); //This line prints a message indicating that the following output will display the modified magicians' names with "The Great" added.
  show_magicians(greatMagiciansArray);
  