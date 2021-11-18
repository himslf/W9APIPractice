document.querySelector('button').addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        return response.json();
      })
      .then((myContent) => {
        myImage.src = myContent['message'];
      });
  }, false);
  
  
  // -------------------------------------------------------------------------



  import axios from 'axios';

  // const BASE_URL = 'https://dictionaryapi.dev/'
  // The basic syntax of a URL request to the API is shown below:
  const BASE_URL = 'https://api.dictionaryapi.dev/v2/entries/en/'
  
  
  axios.get(`${BASE_URL}`)
     .then(res => {
          console.log(res);
  })
  
  
  
  const searchWord = document.querySelector("search-word");
  const searchResults = document.querySelector("search-results");
  const searchButt = document.querySelector("search-button");
  

  // LOST from here, on...

  // assign task to randImage-button
  searchButt.addEventListener("click", async () => {
    let wordInfo = searchResults.value;
  
    let response = await axios.get(`https://api.dictionaryapi.dev/v2/entries/en/${searchWord}`)
    let fullResponse = response.data.message;
  
    // and display result in appropriate div
    fullResponse.innerHTML = `<img src=${fullResponse}>`;
  })


