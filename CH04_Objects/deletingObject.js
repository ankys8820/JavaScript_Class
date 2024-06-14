// {Deleting Object's properties}

let obj = {
  prop1: "value1",
  prop2: "value2",
};

let returnValue = delete obj.prop1;

// It always return true
console.log(obj); //{ prop2: 'value2' }
