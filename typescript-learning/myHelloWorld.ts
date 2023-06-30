console.log("Hello World");
let firstName: string = "Kumar";
let lastName: string = "Sushobhan";
let grade: number = 88.6;
let found: boolean = true;

console.log("Hi " + firstName + " " + lastName + " Good morning");

for (let i = 0; i < 5; i++) {
  console.log("Value is " + i);
}

let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;
for (let index = 0; index < reviews.length; index++) {
  total = total + reviews[index];
}
console.log("Average is : " + total / reviews.length);

let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let index = 0; index < sportsOne.length; index++) {
  console.log(sportsOne[index]);
}

for (const tempSport of sportsOne) {
  if (tempSport == "Cricket") {
    console.log("Favourate : " + tempSport);
  } else {
    console.log("Not favourate: " + tempSport);
  }
}

let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];
sportsTwo.push("Baseball");
sportsTwo.push("Football");
console.log("Array elements after push : " + sportsTwo);
let miniArray = sportsTwo.slice(1, 3);
console.log("Array elements after slice : " + miniArray);
