const guestlist: string[] = ["Imran Khan", "Nawaz Sharif", "IMF"];
console.log("We can only invite two people for the dinner.");

while (guestlist.length > 2) {
    const removedGuest = guestlist.pop();
    console.log(`Sorry ${removedGuest}, we can not invite you to the dinner.`);
}
for (const guest of guestlist) {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
}

guestlist.splice(0);
console.log("Guest list after removing all names:", guestlist); 