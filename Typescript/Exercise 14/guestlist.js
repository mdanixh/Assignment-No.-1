"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestlist = void 0;
//Guest List
//Make a list of atleast three persons to whom do you want to invite to the dinner
var guestlist = ["Imran Khan", "Nawaz Sharif", "IMF"];
for (var i = 0; i < guestlist.length; i++) {
    console.log("Dear ".concat(guestlist[i], ", you are cordially invited to dinner in order to resolve conflicts. Please join us for a remarkable resolution of the country's financial condition"));
}
exports.guestlist = __spreadArray([], , true);
