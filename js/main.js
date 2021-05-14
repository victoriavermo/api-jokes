//Joke Variables
const url = 'https://icanhazdadjoke.com/';
const header = { 
        headers: { Accept: "application/json" },
    };
const url2 = 'https://friends-quotes-api.herokuapp.com/quotes/random';    
const jokeP = document.querySelector(".joke");
let flag = true;

//Weather Variables
const key = config.API_KEY;
const urlWeahter = `https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${key}&lang=ca`;
const cityP = document.querySelector(".city");
const iconP = document.querySelector(".icon");
const descriptionP = document.querySelector(".description");
const tempP = document.querySelector(".temp");
const minP  = document.querySelector(".min");
const maxP = document.querySelector(".max");

/* ---- EXERCICE 1 and 2: JOKE ---- */
//Function that get the joke from de API.
function getData(){

   if(flag){
      fetch(url,header)
        .then(response => response.json())
        .then(data => showJoke(data.joke));   
   }else{
        fetch(url2)
            .then(response => response.json())
            .then(data => showJoke(data));
   } 
   flag = !flag;
}

//Function that prints the joke.
function showJoke(joke){
    console.log(joke);
    if(!flag){
        jokeP.innerText = `" ${joke} "`;
    }else{
        jokeP.innerHTML = `<q>${joke.quote}</q> <cite> - ${joke.character} (Firends TV Sitcom)</cite>`;
    }
    

    
}

/* ---- EXERCICE 3: WEATHER ---- */
window.onload = getWeather;

function getWeather(){
    fetch(urlWeahter)
        .then(response => response.json())
        .then(data => showWeather(data));
}

function showWeather(data){
    let city = data.name;
    let tiempo = chooseIcon(data.weather[0].main);
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let min = data.main.temp_min;
    let max = data.main.temp_max;

    cityP.innerText = city;
    iconP.innerText = tiempo; 
    descriptionP.innerText = description; 
    tempP.innerText = temp+'ºC';
    minP.innerText = min+'ºC';
    maxP.innerText = max+'ºC';
}

function chooseIcon(weather){
    switch(weather){
        case 'Clouds':
            return  '☁️';
        case 'Atmosphere':
            return '🌫️';
        case 'Clear':
            return '☀️'; 
        case 'Snow':
            return '❄️';  
        case 'Rain':
            return '🌧️';       
        case 'Drizzle':
            return '🌦️'; 
        case 'Thunderstorm':
            return '⛈️'; 
    }
}
