'use strict'; 





// declare a variable, assign it the value of the user's input
let surprise= prompt("WOH!! What are you doing here?");

console.log(surprise);

let text;
if (confirm("Do you really wanna look at this content?") == true) {
  text = "You pressed yes!";
} else {
  text = "You pressed get me outta here!";
}

function wassup() {
let username= prompt("Mhhmm...Besides the point. What do I call you?");
console.log(' Well hello there, ' + username);

let aimless = prompt ("Are you lost?");
let message;
if (aimless == 'yes'){
    message = 'The Struggler';
} else if (aimless == 'no'){
    message = 'You have arrived';
} else {
    message = 'Just a transient';
}

return username;
}


// call the function with its own name

wassup ()
console.log(wassup())

document.write("<p id='username'>" + username + message + "</p>");


// let text;
// if (confirm("Press a button!") == true) {
//   text = "You pressed OK!";
// } else {
//   text = "You canceled!";
// }


// print the user's input to the console



// let confused =prompt( username + " ,huh? Well, can't say that " + username + " is the most exotic name.");


// Checking for Joseph

// if (username === "Joseph") {
//     console.log("Welcome Sweet Doody!!");
// } else {
//     console.log("Welcome! Now GET OUT!!");
// }

// let feels = prompt("Welcome " + username + "! Feeling blue?");{
//     console.log("well thats too bad");
// }
// How to put data on the page
 

// username.tooLowerCase() OR username.toUpperCase() to make sure that the username is accepted even if the user types a uppercase for the first letter

// let age = prompt("How old is your cat?");
// if (age > 20){
//     console.log ("Wow, that's old!");
// }
// else if (age > 10){
//     console.log("You've had them a while!");
// }
// else {
//     console.log("Aww, kitty!");
// }  

// function numberpick ()
// {
//     for (let i=0)
// }