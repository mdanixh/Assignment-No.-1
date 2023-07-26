//Make an array of usernames and test the different statements for different users accordingly.
var usernames = ['admin', 'Aiman', 'Ahmed', 'Bilal', 'Tahir', 'Gul Ahmed'];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === 'admin') {
        console.log("Hello admin, would you like to see status report?");
    }
    if (username === 'Gul Ahmed') {
        console.log("Hello Gul Ahmed! you can enjoy the administrator rights in your account");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in."));
    }
}
