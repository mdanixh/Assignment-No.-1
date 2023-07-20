function make_great(magicians) {
    for (var i = 0; i < magiciansArray.length; i++) {
        magicians[i] = "The Great " + magicians[i];
    }
}
function show_Magicians(magicianArray) {
    for (var _i = 0, magiciansArray_1 = magiciansArray; _i < magiciansArray_1.length; _i++) {
        var magician = magiciansArray_1[_i];
        console.log(magician);
    }
}
//Example array of magicians
var magiciansArray = ["Ainak Wala Jin", "Harry Potter", "Aamil Junaid Bangali"];
//Call make_great() to moidify the magicians names
make_great(magiciansArray);
//Call show_magician() to display the modified names
show_Magicians(magiciansArray);
