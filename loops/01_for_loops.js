// Outer loop to iterate from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(`outer loop ${i}`);

  // Inner loop to iterate from 0 to 10
  for (let j = 0; j <= 10; j++) {
    // Print multiplication table for each combination of i and j
    console.log(i + "*" + j + " = " + i * j);
  }
}

// Array iteration using a standard for loop
let forlooparray = ["hello", "hi", "fly", "dry"];
console.log(forlooparray.length);

// Loop through the elements of the array and print each element
for (let index = 0; index < forlooparray.length; index++) {
  const element = forlooparray[index];
  console.log(element);
}

// Another loop example, printing values from 1 to 20
for (let index = 1; index <= 20; index++) {
  console.log(`value of i ${index}`);
}

// For-of loop to iterate over the elements of an array
const foroff = [10, 20, 30, 40, 50, 60];
for (const iterator of foroff) {
  console.log(`value of ${iterator}`);
}


