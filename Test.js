"use strict";

// Switch Operation
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("The day is Matched");
    break;

  case "Satureday":
    console.log("The day is not Matched");
    break;
  default:
    console.log("Not a Valid Day");
}

// Ternary Operation

let bill = 275;

let tip = bill <= 500 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(` The bill was ${bill} and the tip will be ${tip}`);

// Function + Arrow function

var calcAge = (birthYear) => 2024 - birthYear;

console.log(calcAge(1994));

var calcRetirement = (birthYear) => {
  var age = calcAge(birthYear);
  var retirementAge = 50 - age;
  console.log(retirementAge);
};

calcRetirement(1994);

// Array
const arr = new Array(0, 15, 2, 50, 80, 20, 155, 13, 2, 100);
let var1, var2, temp;
console.log(`The array lenth ${arr.length}`);

//arr.sort(function(a, b){return a-b});
for (let i = 0; i <arr.length; i++) {
  for (let j = 0; j <arr.length; j++) {
    if (arr[j] >= arr[j + 1]) {
      temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(`Updated Array: ${arr}`);

// Object + Loop/Foreach 

const jonas = {
  fName: "Jonas",
  lName: "Heart",
  age: 25,
  friends: ["Michel", "Bob", "Cycrus"],

  calcAge: function (birthYear) {
    return 2024 - birthYear;
  },
};

console.log(jonas.calcAge(1994));

for (let key in jonas){
  console.log(key, typeof jonas[key]);
}

// Class

const person = class employee {
    constructor(name, age){
      this.name = name;
      this.age = age;
      console.log(name, age);
    }
}
const person1 = new person ('salehin', 23)

// Rest parameter function
// the three dots ahead of the parameter works like array

function print (a, b, ...c){
  console.log(`A parameter value ${a} and B parameter value ${b}`);
  console.log(`C parameter value ${c}`);

}

print(12, 23, ' Salehin ', ' Nazib ', ' Marjuk '); 

function maxAge(){
  let max = 0;
  for(let i=0; i< arguments.length; i++){
      if (arguments[i] > max){
          max = arguments[i];
      }
  }
  return max;
}

console.log(maxAge(20, 55, 15, 19, 45, 60, 79));