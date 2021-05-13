const url = 'https://icanhazdadjoke.com/';
const header = { 
        headers: { Accept: "application/json" },
    };
const jokeP = document.querySelector(".joke");    
    

//Function that get the joke from de API.
function getData(){
    fetch(url,header)
        .then(response => response.json())
        .then(data => showJoke(data.joke));
}

//Function that prints the joke.
function showJoke(joke){
    console.log(joke);
    jokeP.innerText = `" `+joke+` "`;
}

