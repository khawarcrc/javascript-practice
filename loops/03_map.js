const map = new Map();
map.set("Us", "United States");
map.set("state", "all");
map.set("uk", "united kingdom");
console.log(map);

// Iterating through the key-value pairs in a Map
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
// Maps are iterable in JavaScript

// Object iteration using a for-in loop
const myObject = {
  "blog-title1": "football news",
  "blog-title2": "cricket news",
  "blog-title3": "mma news",
};

// Loop through the keys of the object and print key-value pairs
for (const key in myObject) {
  console.log(`${key} for ${myObject[key]}`);
}
// Iterating through keys of an object using a for-in loop

const programmingLanguages = ["js", "c++", "c", "java", "rb", "python"];
// Iterating through array elements using a for-in loop
for (const key in programmingLanguages) {
  console.log(programmingLanguages[key]);
}
// Iterating through array elements using a for-in loop


