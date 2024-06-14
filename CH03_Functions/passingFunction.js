// {## Passing function as an Arguments (Higher order function example)}
let upperCase = function (str) {
  return str.toUpperCase();
};
let lowerCase = function (str) {
  return str.toLowerCase();
};

let transformer = function (str, fun) {
  return fun(str);
};

console.log(transformer("mona", upperCase));
