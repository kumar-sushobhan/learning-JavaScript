const numbers = [1, 2, 2, 3];
console.log(numbers);

const numberSet = new Set();
numberSet.add(1).add(1).add(2).add(2).add(3);
console.log(numberSet);
console.log(numberSet.delete(3));
console.log(numberSet);
console.log(numberSet.has(2));
console.log(numberSet.has(3));
console.log(numberSet.size);

for (const e of numberSet) {
  console.log(e);
}

numberSet.forEach((e) => {
  console.log(e);
});

console.log(Array.from(new Set(numbers)));
