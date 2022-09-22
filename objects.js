// Objects
const person = {
  firstName: "Kumar",
  age: 21,
  isFemale: true,
  balance: 100.32,
  dob: new Date(2000, 1, 28).toJSON(),
  address: {
    city: "London",
    postCode: "SW9",
  },
  toString: function () {
    return `Name: ${this.firstName} Age: ${this.age}`;
  },
  deleteMe: true,
};

console.log(person.toString());

// person.lastName = "Sushobhan";
person["lastName"] = "Sushobhan";
// delete person.deleteMe;
delete person["deleteMe"];
console.log(person.toString());
// console.log(person);

for (const p in person) {
  console.log(person[p]);
}

// keys and values
console.log("---------------");
console.log(Object.keys(person));
console.log(Object.values(person));
console.log("---------------");

// const firstName = person.firstName;
// const age = person.age;
// const balance = person.balance;

// Using spread operator
const {
  firstName,
  age,
  balance,
  address: { city },
} = person;

console.log(firstName);
console.log(age);
console.log(balance);
console.log(city);
