// {## Bind Method}

function greet() {
  console.log(`Welcome ${this.username} ${this.lastname} on codacademy`);
}

let user = {
  firstName: "John",
  lastName: "jane",
};

let greets = greet.bind(user);

greets();
