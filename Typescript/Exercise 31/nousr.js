//Make an array of usernames emty and test the different statements for different users accordingly.
var usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some user!.");
}
else {
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in."));
        }
    }
}
