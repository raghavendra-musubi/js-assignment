
// const apiUrl = 'http://api.forismatic.com/api/1.0/'
const apiUrl = 'https://type.fit/api/quotes'
let quotesArray 
let quoteElement = document.getElementById("quote")
let authorElement = document.getElementById("author")

fetch(apiUrl)
  .then(function(response) {
    return response.json()
  })
  .then(function(quotesArray) {
    
    console.log(quotesArray.length)

    // load a random quote and the author
    

    // set the inner text for author and quote
    quoteElement.innerHTML = "Here goes the quote"
    authorElement.innerHTML = "Here goes the author"


  });

