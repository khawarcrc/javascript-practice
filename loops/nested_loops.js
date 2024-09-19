// // Define the size of the multiplication table
// const size = 5;

// // Outer loop: Iterates over rows
// for (let i = 1; i <= size; i++) {
//   // Inner loop: Iterates over columns
//   for (let j = 1; j <= size; j++) {
//     // Print the product of i and j
//     process.stdout.write(`${i * j}\t`);
//   }
//   // Print a newline after each row
//   console.log();
// }

const arrayTwoD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let flatArray = [];
for (let i = 0; i < arrayTwoD.length; i++) {
  for (let j = 0; j < arrayTwoD[i].length; j++) {
    flatArray.push(arrayTwoD[i][j]);
  }
}

console.log(flatArray);
