//Make an array of magicians and make a function called show_Magicians that prints each name of the magician presented in the array.
function show_Magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
//Example usage
var magicianArray = ["Ainak Wala Jin", "Aamil Junaid Bangali", "Ali Baba"];
show_Magicians(magicianArray);
