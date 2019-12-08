// loop though the numbers in the 'listOfNumbers' array (using a for.. of loop)
// write a conditional statement that checks whether the number is even or odd
// if it is even print "2 is even" (plug in the current #)
// if it is odd print "3 is even" (plug in the current #)
let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const num of listOfNumbers) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

//Declare three variables (eyeColor, hairColor, height). If eyeColor is blue and hairColor is red and height is 6ft, console log the string template `red hair, blue eyes, and 6ft tall, otherwise console log "not a match"

let eyeColor = "blue";
let hairColor = "red";
let height = "6ft";

if (eyeColor === "blue" && hairColor === "red" && height === "6ft") {
    console.log(`${hairColor} hair, ${eyeColor} eyes, and ${height} tall`)
} else {
    console.log("not a match");
}