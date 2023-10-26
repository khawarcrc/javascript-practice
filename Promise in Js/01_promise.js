const promiseone = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "add",
      email: "abc@gmail.com",
    });
  }, 1000);
});
promiseone.then(function (user) {
  console.log(user);
});

//
const promisetwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "add", password: "01356" });
    } else {
      reject("Error Occured");
    }
  }, 1000);
});
promisetwo
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is resolved or rejected");
  });

// Create a new Promise named promisethree
const promisethree = new Promise((resolve, reject) => {
  // Set a timeout to simulate an asynchronous operation
  setTimeout(() => {
    let error = true; // Set error to false to resolve the Promise
    if (!error) {
      resolve({ username: "js-javascript", password: "01356" });
    } else {
      reject(new Error("Error: Promise three occurred"));
    }
  }, 1000); // Resolve or reject the Promise after 1000 milliseconds (1 second)
});

// Define an async function named consumePromiseThree
const consumePromiseThree = async () => {
  try {
    // Wait for the Promise to be resolved or rejected, then store the result in response
    const response = await promisethree;
    console.log(response); // Log the resolved value to the console
  } catch (error) {
    console.error(error); // Log any errors to the console
  }
};

// Call the consumePromiseThree function to start the asynchronous operation
consumePromiseThree();

