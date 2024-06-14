// {## this Keyword}

/* 
In each Method we have as access of special keyword called "this"


"this" keyword represent the object. "Calling" the method in which "this" is present
*/

let person = {
  firstName: "Ankit",
  lastName: "Shah",
  city: "Kolkata",
  education: "software",
  getSummary: function () {
    //     return `${this.firstName} ${this.lastName} lived in ${this.city}.`;
    return this;
  },
};

console.log(person);
// console.log(person.getSummary());

// Step 1 Check in which method we use 'this' Keyword

// Step 2 Oner of that method(Who is calling those method)
