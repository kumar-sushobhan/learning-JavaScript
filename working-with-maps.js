// Working with maps
const map = new Map();
map.set("name", "James");
map.set("age", 22);
map.set("delete", true);
console.log(map);

// Number of items
console.log(map.size);
console.log(map.has("name"));
console.log(map.has("foo"));
console.log(map.get("name"));
// Delete
console.log(map.delete("delete"));
console.log(map.size);
console.log(Object.fromEntries(map.entries()));

for (const k of map.keys()) {
  console.log(k);
}
for (const v of map.values()) {
  console.log(v);
}

console.log("---------------------------");
for (const entry of map) {
  console.log(entry[0]);
}
