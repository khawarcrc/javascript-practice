// Creating an array 'mynumbers' with values from 1 to 10
const mynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using the filter method to create a new array 'newnumbers'
// containing only elements greater than 5 from 'mynumbers'
const newnumbers = mynumbers.filter((number) => {
  return number > 5;
});
// Logging the new array 'newnumbers'
console.log(newnumbers);







// Creating an array 'newnumber' with values from 1 to 10
const newnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Creating an empty array 'newNum2' to store elements greater than 4
const newNum2 = [];

// Using forEach loop to iterate over each element of 'newnumber'
newnumber.forEach((item) => {
  // Checking if the current element is greater than 4
  if (item > 4) {
    // If true, pushing the element to 'newNum2' array
    newNum2.push(item);
  }
});

// Logging the new


const scientificBooks = [
    {
      field: "Physics",
      title: "The Feynman Lectures on Physics",
      author: "Richard P. Feynman, Robert B. Leighton, Matthew Sands",
      year: 1964,
      description: "A series of lectures covering a wide range of physics topics, known for their clarity and engaging presentation."
    },
    {
      field: "Chemistry",
      title: "The Principles of Chemistry",
      author: "Linus Pauling",
      year: 1947,
      description: "A classic work providing a comprehensive introduction to the principles of chemistry, authored by a Nobel laureate."
    },
    {
      field: "Mathematics",
      title: "Principia Mathematica",
      author: "Alfred North Whitehead, Bertrand Russell",
      year: 1910-1913,
      description: "A foundational work in the philosophy of mathematics and logic, although more advanced and technical in nature."
    },
    {
      field: "Biology",
      title: "The Selfish Gene",
      author: "Richard Dawkins",
      year: 1976,
      description: "An exploration of the gene-centered view of evolution, presenting a profound perspective on the role of genes in natural selection."
    },
    {
      field: "Computer Science",
      title: "Introduction to the Theory of Computation",
      author: "Michael Sipser",
      year: 1997,
      description: "A well-regarded introduction to the theory of computation, covering automata theory, formal languages, and computational complexity."
    }
  ];
  const filteredbookbyfield = scientificBooks.filter((book) => {
   return book.field === "Computer Science"
  })
  const filteredbookbyyear = scientificBooks.filter((book) => {
    return book.year < 1950
  })
  const filterByYear = scientificBooks.filter((book) => {
    return book.year > 1970
  })
  console.log("by field name === Computer",filteredbookbyfield)
  console.log("by year < 1950",filteredbookbyyear)
  console.log("by year > 1970",filterByYear)