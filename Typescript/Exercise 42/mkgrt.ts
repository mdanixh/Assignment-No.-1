function make_great(magicians: string[]): void {
    for(let i = 0; i < magiciansArray.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}

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