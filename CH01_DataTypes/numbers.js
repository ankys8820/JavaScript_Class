// {# Numbers}
let score = 50;

// console.log(score, typeof score);//(50 typeof score)
// let result = score / 2; // Quotient
// console.log(result);
// let result = score % 2; / remainder
// console.log(result);
let result = score * 2 + 4 * 3 - ((8 / 2) % 4);

// Using Priority And Precedence
// 1 () Brackets
// 2 ** Power Operator
// 3 * / % (From Left to Right)
// 4 + - (From Left to Right)

console.log(result);

// {# Concatinations of Numbers}
// If we concatinate a number to string, the whole will be strings
let resultline = "My total score is = " + result;
console.log(resultline);

// {# Loose Equality (==) Vs Strict Equality Operator (===)}

// Loose Equality Operator ==
let age = 22; // Number type value
console.log(age == "22"); // Focus Only on Value but Not the DataType

// Strict Equality Operator ===
console.log(age === "22"); // It checks value and Types
