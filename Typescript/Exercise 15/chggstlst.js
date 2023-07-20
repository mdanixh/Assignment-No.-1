var guestList = ["Imran Khan", "Nawaz Sharif", "IMF"];
console.log("".concat(guestList[1], " can't make it to the dinner."));
guestList[1] = "Gen. Asim Munir"; // IMF with Gen. Asim Munir
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var person = guestList_1[_i];
    console.log("Dear ".concat(person, ", you are cordially invited to dinner. Please join us for an evening of great food and fascinating conversations."));
}
