// {### Array}

let dishes = ["Biriyani", "Chat", "Paratha"];

// Access
console.log(dishes[0]);
console.log(dishes[1]);
console.log(dishes[2]);

// Modify The array

dishes[0] = "Rice";

console.log(dishes);

// {## Array Methods}

// {# Join Method}

console.log(dishes.join("-"));

// Some functions are same as Strings, But not all function

// Indexof
console.log("Index of Chat is :" + " " + dishes.indexOf("Chat"));

// { }

let newDishes = ["sweet-dish", "paani-puri"];

// This is  nonMutable property
console.log(dishes.concat(newDishes));

// Push Method (Mutable property)
dishes.push("Bhature");

console.log(dishes);

// Pop method (Remove from Last)

dishes.pop();

console.log(dishes);
