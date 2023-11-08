async function getSpaceNews() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error occured getspace news");
  }
}

getSpaceNews();

async function getQuotes() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error in fatching quotes");
  }
}
getQuotes();

async function getExchangeRates() {
  try {
    const response = await fetch();
    const data = await response.json;
    console.log(data);
  } catch (error) {
    console.log("Error in exchange rates");
  }
}
getExchangeRates();
