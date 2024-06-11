'use strict'

// Switch Operation
let day = "Monday";

switch(day){

    case "Monday":
        console.log('The day is Matched');
        break;
    
    case "Satureday":
        console.log('The day is not Matched');
        break;
    default:
        console.log('Not a Valid Day')
}

// Ternary Operation 

let bill = 275;

let tip = bill <= 500 && bill >= 50 ? bill*.15 : bill*.2;

console.log(` The bill was ${bill} and the tip will be ${tip}`);

// Function + Arrow function

var calcAge = (birthYear) => 2024 - birthYear;

console.log(calcAge(1994));

var calcRetirement = (birthYear) => {
    var age = calcAge(birthYear);
    var retirementAge = 50- age;
    console.log(retirementAge);
}

calcRetirement(1994)

