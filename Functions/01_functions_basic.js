// This function takes two parameters, number1 and number2,
// and checks if both of them are of type 'number'. If they are,
// it returns their sum.
function addNumbers(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  }
}

// Calls the addNumbers function with the arguments 4 and 4.
// Since both arguments are numbers, it returns their sum, which is 8.
const result = addNumbers(4, 4);

// Logs the result to the console.
console.log(result);

// This function takes at least two parameters (num1 and num2) and
// collects any additional arguments passed as an array called num3.
function calculator(num1, num2, ...num3) {
  return num3; // Returns the num3 array.
}

// Calls the calculator function with arguments 10, 10, 20, and 30.
// The collected additional arguments (20 and 30) are returned as an array.
console.log(calculator(10, 10, 20, 30));

// This function takes an object called objecttype as a parameter and
// logs the values of its 'username' and 'password' properties.
function objecthandeling(objecttype) {
  console.log(
    `user name ${objecttype.username}. password ${objecttype.password}`
  );
}

// Calls the objecthandeling function with an object as an argument,
// and it logs the username and password properties from the object.
objecthandeling({
  username: "abc",
  password: "123456",
});

// Define a function called arrayhandeling that takes an array as a parameter.
function arrayhandeling(arraydata) {
  // Return the element at index 1 of the array.
  return arraydata[1];
}

// Create an array called myarray with values [100, 200, 300].
const myarray = [100, 200, 300];

// Call the arrayhandeling function with myarray as an argument.
// It returns the element at index 1 (200) and logs it to the console.
console.log(arrayhandeling(myarray));

// Define a function called addone that takes a number as a parameter and returns that number plus 1.
function addone(num) {
  return num + 1;
}

// Call the addone function with the argument 5, and it returns 6, which is then logged to the console.
console.log(addone(5));

// Create an object called user with properties 'username' and 'password' and a method called 'loginmessage'.
const user = {
  username: "abcd",
  password: "123456",
  loginmessage: function () {
    // The loginmessage method logs a message with the 'username' property of the object.
    console.log(`${this.username} , welcome `);
  },
};

// Call the loginmessage method on the user object, which logs the initial username and a welcome message.
user.loginmessage();

// Change the 'username' property of the user object to 'newuser'.
user.username = "newuser";

// Call the loginmessage method again on the user object with the updated username,
// which logs the new username and a welcome message.
user.loginmessage();

// Define a function called thiscase.
function thiscase() {
  // Declare a local variable called username within the function.
  let username = "is it possible for this to access me";
  // Attempt to log the 'username' property of the global object (usually the window in a browser environment),
  // but it won't work as 'username' is a local variable and not a property of the global object.
  console.log(this.username);
}

// Call the thiscase function, which attempts to access a 'username' property,
// but it won't find it, so it logs undefined.
thiscase();

const arrowfunction = () => {
  let newuser = "is it possible acces this in here";
  console.log(this.newuser);
};
arrowfunction();

const addtwoarrow = (num1, num2) => ({ username: "mka" });
console.log(addtwoarrow(3, 4));

// immediately invoked function

// (function iife() {
//     console.log(`immediately invoked`);
// })();

