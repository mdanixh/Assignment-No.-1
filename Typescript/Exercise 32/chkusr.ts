//Checking username to ensure that every user has unique username.
//Make a list of username called current_Users
//Make another list of username called new_Users
//Loop through the new_user list to see each new username has already been used. if, it has printed, you need to pick a new username. if username has not been used, print message that username is available.

const current_Users: string[] = ["John", "Tyrone", "Conrad", "Cajetan"];
const new_Users: string[] = ["Conrad", "Sahira", "Amar", "Dean"];

for (const new_user of new_Users) {
    const is_existing_user = current_Users.some((current_Users) =>
    current_Users.toLowerCase() === new_user.toLowerCase()
    );  
    if (is_existing_user) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    } else {
        console.log(`The username ${new_user} is available.`);
    }
}

//Alternative method
// Make a list of current users
const current_users: any = ["john", "alice", "jane", "bob", "smith"];

// Make a list of new users
const new_users: any = ["joe", "Alice", "mike", "janeDoe", "sMiTh"];

// Function to check if a username exists in the current_users list
function isUsernameTaken(username: any): boolean {
  const lowerCaseUsername = username.toLowerCase();
  return current_users.includes(lowerCaseUsername);
}

// Loop through the new_users list and check if each username is available
new_users.forEach((username) => {
  const isTaken = isUsernameTaken(username);
  if (isTaken) {
    console.log(`Sorry, the username '${username}' is already taken. Please choose a different one.`);
  } else {
    console.log(`The username '${username}' is available.`);
  }
});
