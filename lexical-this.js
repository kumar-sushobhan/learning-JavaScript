// lexical this
const person = {
  firstName: "Kumar",
  age: 21,
  car: ["Tesla", "Kia"],
  toString() {
    console.log(`Name: ${this.firstName} Age: ${this.age}`);
    this.car.forEach((car) => {
      console.log(`Name: ${this.firstName} drives ${car}`);
    });
  },
  deleteMe: true,
};

person.toString();
