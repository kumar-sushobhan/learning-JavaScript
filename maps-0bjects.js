const person = {
  firstName: "James",
  1: 2,
};

console.log(person);

const map = new Map();
map.set("firstName", "James");
// map.set("age", 2);
map.set({ age: "foo" }, 2);
map.set("1", "Kumar");
map.set(1, 3);
console.log(map);
