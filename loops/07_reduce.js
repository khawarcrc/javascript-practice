// Create an array called myNumbers containing the values 1, 2, 3, 4, 5, and 6.
const myNumbers = [1, 2, 3, 4, 5, 6];

// Use the reduce method on myNumbers to calculate the sum of all elements.
// The reduce method takes a callback function as an argument and an initial value (0 in this case).
const myTotal = myNumbers.reduce((accumulator, currentValue) => {
  // Log the current values of the accumulator and the current element during each iteration.
  console.log(`accumulator: ${accumulator} and currentValue: ${currentValue}`);

  // Return the sum of the accumulator and the current element.
  return accumulator + currentValue;
}, 0);

// Log the final result, which is the sum of all elements in the array.
console.log(myTotal);

const shoppingCart = [
  { itemName: "js", price: 100 },
  { itemName: "React", price: 150 },
  { itemName: "Node.js", price: 120 },
  { itemName: "CSS", price: 80 },
  { itemName: "HTML", price: 90 },
  { itemName: "Database", price: 200 },
];
const ToalPrice = shoppingCart.reduce((accumalator, currentvalue) => {
return accumalator + currentvalue.price
},0)

console.log(ToalPrice)