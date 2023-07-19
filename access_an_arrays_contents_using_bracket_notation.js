// The fundamental feature of any data structure is, of course, the ability to not only store data, but to be able
//         to retrieve that data on command. So, now that we've learned how to create an array, let's begin to think about
//         how we can access that array's information.
// In an array, each array item has an index. This index doubles as the position of that item in the array, and how
//         you reference it. However, it is important to note, that JavaScript arrays are zero-indexed, meaning that the
//         first element of an array is actually at the zeroth position, not the first. In order to retrieve an element
//         from an array we can enclose an index in brackets and append it to the end of an array, or more commonly, to a
//         variable which references an array object. This is known as bracket notation.

let myArray = ["a", "b", "c", "d"];
// Only change code below this line
myArray[1] = "not b anymore";
myArray[0] = ['1' , 2 , null, undefined];
// Only change code above this line
console.log(myArray);