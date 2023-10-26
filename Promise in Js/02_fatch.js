async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response)
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("eoor occured fetching data");
  }
}
getAllUsers();

fetch("https://api.github.com/users/khawarcrc")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => console.log(error));
