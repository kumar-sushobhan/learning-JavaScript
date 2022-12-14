const kumar = {
  firstName: "Kumar",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2000, 1, 28).toJSON(),
  toString: function () {
    return `Name: ${this.firstName} Age: ${this.age}`;
  },
  deleteMe: true,
};

const address = {
  city: "London",
  postCode: "SW9",
};

const person = {
  ...kumar,
  address: { ...address },
};
console.log(person);
