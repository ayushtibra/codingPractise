// https://javascript.plainenglish.io/what-is-the-this-keyword-in-javascript-200c837f5495

const person = {
  firstname: "ayush",
  lastname: "tibra",
  fullname: function (param1, param2) {
    console.log(
      this.firstname + " " + this.lastname + " " + param1 + " " + param2
    );
  },
  tryNew: () => {
    console.log(this.firstname + " " + this.lastname);
  },
};

var Person2 = {
  firstname: "John",
  lastname: "Doe",
};

// this refers to an object. Specifically, the object that is calling upon a function
person.fullname();
person.tryNew();

//If this is referenced outside of an object, then it will refer to the global object. This is the default binding.
console.log(this);

person.fullname.call(Person2, "wise", "funny");
person.fullname.apply(Person2, ["cool", "boy"]);
