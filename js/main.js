//Joke Variables
const url = 'https://icanhazdadjoke.com/';
const header = { 
        headers: { Accept: "application/json" },
    };
const jokeP = document.querySelector(".joke");

//Weather Variables
const key = config.API_KEY;
const urlWeahter = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${key}&lang=ca`;
const cityP = document.querySelector(".city");
const iconP = document.querySelector(".icon");
const descriptionP = document.querySelector(".description");
const tempP = document.querySelector(".temp");
const minP  = document.querySelector(".min");
const maxP = document.querySelector(".max");

/* ---- EXERCICE 1: JOKE ---- */
//Function that get the joke from de API.
function getData(){
   fetch(url,header)
        .then(response => response.json())
        .then(data => showJoke(data.joke));
}

//Function that prints the joke.
function showJoke(joke){
    console.log(joke);
    jokeP.innerText = `" ${joke} "`;
}

/* ---- EXERCICE 2: WEATHER ---- */