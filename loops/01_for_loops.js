// Outer loop to iterate from 0 to 10
// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop ${i}`);

//   // Inner loop to iterate from 0 to 10
//   for (let j = 0; j <= 10; j++) {
//     // Print multiplication table for each combination of i and j
//     console.log(i + "*" + j + " = " + i * j);
//   }
// }

// Array iteration using a standard for loop
let forlooparray = ["hello", "hi", "fly", "dry"];
console.log(forlooparray.length);

// // Loop through the elements of the array and print each element
// for (let index = 0; index < forlooparray.length; index++) {
//   const element = forlooparray[index];
//   console.log(element);
// }

// // Another loop example, printing values from 1 to 20
// for (let index = 1; index <= 20; index++) {
//   console.log(`value of i ${index}`);
// }

// // For-of loop to iterate over the elements of an array
// const foroff = [10, 20, 30, 40, 50, 60];
// for (const iterator of foroff) {
//   console.log(`value of ${iterator}`);
// }

let arrayNew = ["hello", 1, "abc", "bc"];
console.log(arrayNew.length);
arrayNew.shift();
console.log(arrayNew);
arrayNew.unshift("hello");
console.log(arrayNew);

let courses = ["fe", "be", "qa", "figma"];
let pay = [10, 20, 30, 40];
let concatedArray = pay.concat(courses);
console.log(concatedArray);

let nestedArray = [1, 2, [3, 5, 6, [8, 9, 1, 2]], [20, 20]];

let simpleFlatArray = nestedArray.flat();
let infinityFlatArray = nestedArray.flat(Infinity);
console.log(simpleFlatArray);
console.group(infinityFlatArray);

let findAarray = [10, 20, 30, 40, 80, 90];
let findNumber = findAarray.find((number) => {
  return number > 20;
});
console.log(findNumber);

let indexOfMethod = ["apple", "banana", "orange"];
let indexOfFind = indexOfMethod.indexOf("apple");

console.log(indexOfFind);
