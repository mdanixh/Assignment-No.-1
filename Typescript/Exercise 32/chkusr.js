//Checking username to ensure that every user has unique username.
//Make a list of username called current_Users
//Make another list of username called new_Users
//Loop through the new_user list to see each new username has already been used. if, it has printed, you need to pick a new username. if username has not been used, print message that username is available.
var current_Users = ["John", "Tyrone", "Conrad", "Cajetan"];
var new_Users = ["Conrad", "Sahira", "Amar", "Dean"];
var _loop_1 = function (new_user) {
    var is_existing_user = current_Users.some(function (current_Users) {
        return current_Users.toLowerCase() === new_user.toLowerCase();
    });
    if (is_existing_user) {
        console.log("The username ".concat(new_user, " is already taken. Please enter a new username."));
    }
    else {
        console.log("The username ".concat(new_user, " is available."));
    }
};
for (var _i = 0, new_Users_1 = new_Users; _i < new_Users_1.length; _i++) {
    var new_user = new_Users_1[_i];
    _loop_1(new_user);
}
