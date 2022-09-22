function addNumbers(number1, number2) {
    var add = number1 + number2;
    return add;
}
var result = addNumbers(12, 24);
console.log(result);

var person = {
    name: 'John'
};
console.log(Object.values(person));
console.log(Object.keys(person));
console.log("Sushobhan".toUpperCase());
console.log("Sushobhan".indexOf('o'));


// Loops
var names = [
    "Alex",
    "Jamila", 
    "Joe", 
    "Aisha",
    "Bob"
];

console.log("fori");

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log();
console.log("for of");

for (const name of names) {
    console.log(name);
}

console.log();
console.log("forEach");

names.forEach(function(name) {
    console.log(name)
});


// While Loops
var names = [
    "Alex",
    "Jamila",
    "Joe",
    "Aisha",
    "Bob"
];

var index = 0;

while(index < names.length) {
    console.log(names[index]);
    index = index + 1;
}

// Do While Loops
do {
    console.log("hello");
} while(true);

// Break and Continue
for (var i = 0; i <= 10; i++) {
    if (i < 5) {
        continue;
    }
    console.log(i);
}


// Increment and Decrement Operators
var number = 0;
// Postfix
console.log("postfix")
console.log(number++)
console.log(number)
console.log(number--)
console.log(number)
// Prefix
console.log("prefix")
var numberTwo = 0;
console.log(++numberTwo);
console.log(--numberTwo);

console.log("for loop")
for (var i = 0; i <= 10; i++) {
    console.log(i);
}