// {Introduction to objects in JavaScript}

let car = {
  color: "black",
  model: 2023,
  company: "Honda",
};

// accessing properties like array/ but not with indexes but strings
console.log(car["color"]);
console.log(car.company);

// Modification in Objects properties

car.color = "White";

console.log(car);
