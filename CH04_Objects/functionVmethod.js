// {## Function Vs Method}

// let ageCalculator = function (birthyear) {
//   let age = 2024 - birthyear;
//   console.log(`Your Current age is ${age}`);
// };

// ageCalculator(1998);

/*
Method >-- It is nothing but object property(key) holding function as "Value"
*/

let person = {
  ageCal: function (birthyear) {
    let age = 2024 - birthyear;
    return age;
  },
};

// This is called method
console.log(`Current age is ${person.ageCal(2000)}`);
