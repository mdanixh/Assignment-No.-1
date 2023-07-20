var guestlist = ["Imran Khan", "Nawaz Sharif", "IMF"];
console.log("We can only invite two people for the dinner.");
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("Sorry ".concat(removedGuest, ", we can not invite you to the dinner."));
}
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear ".concat(guest, ", you are still invited to dinner."));
}
guestlist.splice(0);
console.log("Guest list after removing all names:", guestlist);
