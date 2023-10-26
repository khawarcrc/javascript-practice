async function getSpaceNews() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    // console.log(response);
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log("error occured getspace news");
  }
}
getSpaceNews();