//  for in loop {Each iteration return a  "Key" of object}

let car = {
  model: 2022,
  color: "Black",
  company: "Toyota",
};

console.log(car);

// Accessing the object values by using 'in' within the for{It is only used in Object of Array}
for (let key in car) {
  console.log(key);
}
