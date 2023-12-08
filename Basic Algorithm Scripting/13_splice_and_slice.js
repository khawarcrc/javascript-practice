// Function that combines two arrays, arr1 and arr2, by inserting the elements from arr1 into arr2 at a specified index, n.

function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 and store it in the localArray variable.
  let localArray = arr2.slice();

  // Iterate through the elements of arr1 using a for loop.
  for (let i = 0; i < arr1.length; i++) {
    // Use the splice method to insert the current element from arr1 into localArray at index n.
    // The splice method takes three arguments:
    //   1. n: The index at which the insertion should occur.
    //   2. 0: The number of elements to delete (in this case, 0, meaning no elements are deleted).
    //   3. arr1[i]: The element from arr1 to insert into localArray.
    localArray.splice(n, 0, arr1[i]);

    // Increment n so that the next element from arr1 will be inserted at the next index in localArray.
    n++;
  }

  // Return the modified localArray, which now contains elements from both arr1 and arr2.
  return localArray;
}

// Call the function with [1, 2, 3] as arr1, [4, 5, 6] as arr2, and 1 as n.
const result = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(result);

// Function that combines two arrays using the splice method and spread operator.

function frankenSplice2(arr1, arr2, n) {
  // Create a copy of arr2 and store it in the localArray2 variable.
  let localArray2 = arr2.slice();

  // Use the splice method to insert the elements from arr1 into localArray2 at index n.
  // The spread operator (...) is used to insert all elements from arr1 at once.
  localArray2.splice(n, 0, ...arr1);

  // Return the modified localArray2, which now contains elements from both arr1 and arr2.
  return localArray2;
}

// Call the function with [1, 2, 3] as arr1, [4, 5, 6] as arr2, and 1 as n.
const result2 = frankenSplice2([1, 2, 3], [4, 5, 6], 1);
console.log(result2);

// Function that combines two arrays using array spread and slice methods.

function frankenSplice3(arr1, arr2, n) {
  // Create a new array by combining three slices:
  // 1. Elements from arr2 before index n.
  // 2. All elements from arr1.
  // 3. Elements from arr2 after index n.
  return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
}

// Call the function with [1, 2, 3] as arr1, [4, 5, 6] as arr2, and 1 as n.
const result3 = frankenSplice3([1, 2, 3], [4, 5, 6], 1);
console.log(result3);

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

// Remove 2 elements starting from index 1
fruits.splice(1, 2);

console.log(fruits);
Output: ["apple", "grape", "kiwi"];

const fruitsNew = ["apple", "banana", "grape"];
// Add  starting from index 2, removing 0 elements
fruitsNew.splice(2, 0, "kiwi", "mango");

console.log(fruitsNew);

const fruitsThree = ["banana", "mango", "orange"];
// Replace 1 element at index 1 with 
fruitsThree.splice(1, 1, "grapes");
console.log(fruitsThree);


const teams = ["liverpool" , "man city", "barca", "madrid"];

teams.splice(2,2)

console.log(teams)

teams.push("barca", "madrid", "ac milan" , "inter milan");
console.log(teams)

teams.pop()
console.log(teams)