var firstName = "Sushobhan";
var age = 21;
var isFemale = true;
var balance = 100.32;
var dob = new Date(2000, 0, 30);
var person = {};
var empty = undefined;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isFemale);
console.log(typeof balance);
console.log(typeof dob);
console.log(typeof person);
console.log(typeof empty);

console.log("----- String --------")

var brand = "Amigoscode"
console.log(typeof brand)
console.log(brand.length)
console.log(brand.toUpperCase())
console.log(brand.substring(0, 6))

var a = "Amigos"
var b = "code"
console.log(a + " " + b)
console.log(`${a} ${b.toUpperCase()}`)

console.log("----- Objects --------")
// Objects
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "London",
        postCode: "SW9"
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log(person.address.city);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));


// Boolean
var isAdult = true

if (!isAdult) {
    console.log("is not an adult :( ")
} else {
    console.log("is adult :)")
}

console.log(!true)
console.log(!false)


// Arrays
var names = [
    "Alex",
    "Jamila", 
    "Joe", 
    "Aisha"
];
console.log(names);
console.log("Index 0 - " + names[0]);
console.log("Index 1 - " + names[1]);
console.log("Index 2 - " + names[2]);
console.log("Index 3 - " + names[3]);
console.log("Index 4 - " + names[4]);
console.log("Size = " + names.length);


// Arithmetic Operators
var addition = 2 + 2;
var subtraction = 2 - 2;
var division = 10 / 2;
var multiplication = 10 * (2 + 1) * 0;
var remainder = 10 % 7;
var exponentation = 3 ** 3;

console.log(addition);
console.log(subtraction);
console.log(division);
console.log(multiplication);
console.log(remainder);
console.log(exponentation);