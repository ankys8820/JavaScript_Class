// {## Function}

function nameOfFunc() {
  console.log("You are Running name of function");
}

// function call
// nameOfFunc();

// Function Expression

let fun = function () {
  // also called anonymous function
  console.log("This is an example of function expression");
};

// calling function expression
// fun();

// {Passing values on Function =>(Arguments and Parameters)}
let invitation = function (name) {
  console.log(`Welcome! ${name} You are invited on Our event.`);
};

invitation("Ankit");

let ageCalculator = function (birthYear) {
  let age = 2024 - birthYear;
  console.log(`Your current age is ${age}`);
};

ageCalculator(1996);
