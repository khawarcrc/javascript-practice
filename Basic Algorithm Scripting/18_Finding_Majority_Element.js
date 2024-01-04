function findMajorityElement(numbers) {
    const frequencyMap = {};
  
    // Count the frequency of each element in the array
    for (let number of numbers) {
      frequencyMap[number] = (frequencyMap[number] || 0) + 1;
    }
  
    // Find the element with frequency greater than n/2
    const arrayLength = numbers.length;
    for (let key in frequencyMap) {
      if (frequencyMap[key] > arrayLength / 2) {
        return parseInt(key);
      }
    }
  
    // If no majority element is found
    return null;
  }
  
  // Test the function
  const numbers1 = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  console.log(findMajorityElement(numbers1));  // Output: 4
  
  const numbers2 = [1, 2, 3, 4, 5];
  console.log(findMajorityElement(numbers2));  // Output: null