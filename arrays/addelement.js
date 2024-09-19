// add element
function addElement(array, number) {
  array.push(number);
  return array;
}

console.log(addElement([1, 2, 3, 4], 10));

// add element at specific index

function addElementAtSpecificIndex(array, num, index) {
  array.splice(index, 0, num);
  return array;
}

console.log(addElementAtSpecificIndex([1, 2, 3, 4, 5, 6], 5, 2));

// remove element at specific index

function removeElementAtIndex(array, num) {
  const index = array.indexOf(num);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
console.log(removeElementAtIndex([1, 2, 4, 5, 6, 10, 20], 20));

function shiftArrayElementsLeft(array) {
  console.log("original array:", array);
  if (array.length > 0) {
    for (let i = 0; i < array.length - 1; i++) {
      console.log(`shifting element at index ${i} to index ${i + 1}`);
      array[i] = array[i + 1];
    }
    array.pop();
    console.log("array after pop:", array);
  }
  return array;
}

let testArray = [1, 2, 3, 4, 5];
let result = shiftArrayElementsLeft(testArray);
console.log("Final array:", result); // Log the final array

function shiftRight(array, num) {
    // Add a placeholder at the end to accommodate the shift
    array.push(0);
    console.log("Array after push:", array); // Log the array after adding a placeholder
    
    // Loop to shift elements to the right
    for (let i = array.length - 1; i > 0; i--) {
        console.log(`Shifting element at index ${i - 1} to index ${i}`); // Log each shift
        array[i] = array[i - 1];
    }
    
    // Insert the new element at the start of the array
    array[0] = num;
    console.log("Array after inserting new element:", array); // Log the array after insertion
    
    return array; // Return the modified array
}

// Dummy data for testing
let testArrayRight = [1, 2, 3, 4, 5];
let newElementRight = 0;
let resultRight = shiftRight(testArrayRight, newElementRight);
console.log("Final array:", resultRight); // Log the final array
