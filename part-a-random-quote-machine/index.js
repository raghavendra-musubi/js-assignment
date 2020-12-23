
// const apiUrl = 'http://api.forismatic.com/api/1.0/'
const apiUrl = 'https://type.fit/api/quotes'
let quotesArray 
let quoteElement = document.getElementById("quote")
let authorElement = document.getElementById("author")
let arrIndexToPick

fetch(apiUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(data) {
    
    // save the array returned by api call
    quotesArray = data

    // generate a random number between zero and the length of the number of quotes available
    arrIndexToPick = Math.floor((Math.random() * quotesArray.length) + 1);
    
    // set the inner text for author and quote for the first load
    quoteElement.innerHTML = quotesArray[arrIndexToPick].text
    authorElement.innerHTML = quotesArray[arrIndexToPick].author

  });

function generateNew(){

    // generate a random number between zero and the length of the number of quotes available
    arrIndexToPick = Math.floor((Math.random() * quotesArray.length) + 1);

    // set the inner text for author and quote for the first load
    quoteElement.innerHTML = quotesArray[arrIndexToPick].text
    authorElement.innerHTML = quotesArray[arrIndexToPick].author

}

