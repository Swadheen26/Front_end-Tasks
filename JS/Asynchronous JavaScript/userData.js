// Creating the function getUserData
function getUserData(id, callback) {
    // simulate an asyncronous API request using setTimeout
    setTimeout(() =>{
        // creating dummy user
        const user = {
            id : id,
            name : 'Swadheen Prusty',
            email : 'Prustyswadheen03@gmail.com'
        }
        callback(user); // calling the callback function with the user object
    },2000);
}

// creating the displayuser function
function displayuser(user){
    // Displaying user deatils using console.log
    console.log('User Deatils');
    console.log(`ID : ${user.id}`);
    console.log(`Name : ${user.name}`);
    console.log(`Email : ${user.email}`);
}

getUserData(1,displayuser);