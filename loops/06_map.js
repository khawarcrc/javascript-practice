// Given array of numbers
const mapdata = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using the map function to create a new array by adding 20 to each element
const applyingmap = mapdata.map((data) => {
  return data + 20;
});

// Using map, filter, and chaining operations to transform the array elements
const newNums = mapdata
  // Multiply each element by 100
  .map((data) => {
    return data * 100;
  })
  // Add 1 to each element
  .map((data) => {
    return data + 1;
  })
  // Filter out elements that are not greater than 400
  .filter((data) => {
    return data > 400;
  });

// Output the result of the first mapping operation
console.log("data + 20", applyingmap);

// Output the final array after all mapping and filtering operations
console.log(newNums);
