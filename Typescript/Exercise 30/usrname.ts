//Make an array of usernames and test the different statements for different users accordingly.
let usernames: string[] = ['admin', 'Aiman', 'Ahmed', 'Bilal'];
for (let username of usernames) {
    if (username === 'admin') { 
        console.log(`Hello admin, would you like to see status report?`);
} else{
    console.log(`Hello ${username}, thank you for logging in.`);
}
}