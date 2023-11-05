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
      password: "123456"
  })
  
  function arrayhandeling(arraydata){
   return arraydata[1]
  }

const myarray = [100,200,300]
console.log(arrayhandeling(myarray))


 function addone(num){
    return num +  1;
 }


 console.log(addone(5))


 const user = {
    username: 'abcd',
    password: "123456",

    loginmessage: function(){
        console.log(`${this.username} , welcome `)
    }
 }

 user.loginmessage()
 user.username = 'newuser'
 user.loginmessage()