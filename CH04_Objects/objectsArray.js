// {# Object/Array how referece are passed to variable}

let arr = [1, 2, 3, 4, 5];

let getRef = arr;

//
// getRef[5] = 8;

console.log("Original array", arr);
console.log("getRef array", getRef);

console.log("******");
// pass by value
let getValue = [...arr];
getValue[6] = 7;

console.log("Original array", arr);
console.log("getRef array", getRef);
