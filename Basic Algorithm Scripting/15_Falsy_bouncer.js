// Define a function named 'filtered' that takes an array 'arr' as a parameter.
function filtered(arr) {
    // Create an empty array 'filteredArr' to store non-falsy elements.
    const filteredArr = [];
  
    // Use a for loop to iterate over each element in the input array 'arr'.
    for (let i = 0; i < arr.length; i++) {
      // Check if the current element is truthy (not falsy).
      if (arr[i]) {
        // If the element is truthy, push it to the 'filteredArr' array.
        filteredArr.push(arr[i]);
      }
      // Note: The return statement is inside the for loop, which is problematic (explained below).
      // The loop will exit after processing the first element, and 'filteredArr' will only contain the first element.
      // This is likely an unintended behavior.
  
      // To fix this issue, the 'return' statement should be outside the for loop.
    }
  
    // Return the 'filteredArr' array, which contains only truthy elements from the input array.
    return filteredArr;
  }
  
  // Call the 'filtered' function with an array [7, "ate", "", false, 9].
  const result = filtered([7, "ate", "", false, 9]);

//   Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
  
  // Log the result to the console.
  console.log(result);
  
//   function bouncer(arr) {
//     return arr.filter(Boolean);
//   }