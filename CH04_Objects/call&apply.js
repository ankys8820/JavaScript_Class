// {Function}

/*
Call and Apply method
We can manually set the value of "this" keyword using call and apply
*/

let mainPlane = {
  airline: "Fly India",
  iatacode: "FI",
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} Booked Flight on ${this.airline} with Flight Number ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.airline}`, name: name });
  },
};
console.log(mainPlane.book(26, "Ankit"));
console.log(mainPlane.book(2793, "Binod"));
console.log(mainPlane.bookings);
