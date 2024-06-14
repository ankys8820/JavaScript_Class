// Function

// {## Function returning another function}

let compliment = function (msg) {
  return function (name) {
    console.log(`${msg} ${name}`);
  };
};
const complimented = compliment("You are a good coder");

complimented("Binod");
//
