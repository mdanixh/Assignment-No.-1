"use strict";
//Guest List
//Make a list of atleast three persons to whom do you want to invite to the dinner
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
exports.guestlist = ["Imran Khan", "Nawaz Sharif", "IMF"];
// using Loop with Index
// for (let i = 0; i < guestlist.length; i++) {
//   console.log(`Dear ${guestlist[i]}, you are cordially invited to dinner in order to resolve conflicts. 
//   Please join us for a remarkable resolution of the country's financial condition`);  
// }
//Using Loop with for... of 
for (var _i = 0, guestlist_1 = exports.guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear ".concat(guest, ", you are cordially invited to dinner in order to resolve conflicts. Please \n  join us for remakrable resolution of the country's financial condition."));
}
