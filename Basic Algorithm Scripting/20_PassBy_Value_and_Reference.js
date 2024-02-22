// The global variable
var shoppingList = ["Apples", "Milk", "Bread", "Eggs"];

/* This function should add an item to the list and return the list */
// New parameters should come before itemName

// Add your code below this line
function addItem(arr, itemName) {
  // Creating a shallow copy of the array using the spread operator
  let newArr = [...arr]; // Shallow copy of the shoppingList array.
  newArr.push(itemName); // Add itemName parameter to the end of the new array.
  return newArr; // Return the new array.
}

/* This function should remove an item from the list and return the list */
// New parameters should come before the itemName one

// Add your code below this line
function removeItem(arr, itemName) {
  // Creating a shallow copy of the array using the spread operator
  let newArr = [...arr]; // Shallow copy of the shoppingList array.
  if (newArr.indexOf(itemName) >= 0) {
    // Check whether the itemName parameter is in the new array.
    newArr.splice(newArr.indexOf(itemName), 1); // Remove the given parameter from the new array.
    return newArr; // Return the new array.
  }
}

// Example usage of the functions
let newShoppingList = addItem(shoppingList, 'Bananas'); // Add 'Bananas' to the shopping list
let updatedShoppingList = removeItem(shoppingList, 'Milk'); // Remove 'Milk' from the shopping list
let finalShoppingList = removeItem(addItem(shoppingList, 'Bananas'), 'Bread'); // Add 'Bananas' and remove 'Bread' from the shopping list

// Display the original shopping list to show it remains unchanged
console.log(shoppingList);
