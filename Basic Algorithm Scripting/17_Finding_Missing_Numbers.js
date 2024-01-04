function findMissingNumber(arr1, arr2) {
    let result = 0;
  
    // XOR all elements in arr1
    for (let num of arr1) {
      console.log(`XORing ${result} with ${num}`);
      result ^= num;
      console.log(`Result after XOR: ${result}`);
    }
  
    // XOR all elements in arr2
    for (let num of arr2) {
      console.log(`XORing ${result} with ${num}`);
      result ^= num;
      console.log(`Result after XOR: ${result}`);
    }
  
    return result;
  }
  
  // Test the function
  const arr1 = [3, 7, 1, 2, 8, 4, 5];
  const arr2 = [4, 1, 2, 3, 7, 5];
  const missingNumber = findMissingNumber(arr1, arr2);
  console.log(`Final Result: ${missingNumber}`);  // Output: 8
  