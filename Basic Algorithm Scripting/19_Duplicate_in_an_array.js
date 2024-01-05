function findDuplicates(nums) {
    const duplicates = [];
    const seen = {};
  
    for (let num of nums) {
      if (seen[num]) {
        duplicates.push(num);
      } else {
        seen[num] = true;
      }
    }
  
    return duplicates;
  }
  
  // Test the function
  const nums = [4, 3, 2, 7, 8, 2, 1, 5, 7];
  console.log(findDuplicates(nums));  // Output: [2, 7]
  