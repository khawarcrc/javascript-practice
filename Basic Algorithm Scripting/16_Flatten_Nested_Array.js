function flattenArray(nestedArray) {
    const flattenedArray = [];
  
    for (let i = 0; i < nestedArray.length; i++) {
      if (Array.isArray(nestedArray[i])) {
        // If the current element is an array, recursively flatten it
        flattenedArray.push(...flattenArray(nestedArray[i]));
      } else {
        // If the current element is an integer, push it to the result array
        flattenedArray.push(nestedArray[i]);
      }
    }
  
    return flattenedArray;
  }
  
  // Test the function
  const nestedArray = [1, [2, [3, 4], 5], [6, [7, 8]], 9];
  const result = flattenArray(nestedArray);
  console.log(result);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  