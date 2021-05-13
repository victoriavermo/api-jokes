const url = 'https://icanhazdadjoke.com/';
var header = { 
        headers: { Accept: "application/json" },
    };

//Function that get the joke from de API and show it through the console.
function getData(){

    fetch(url,header)
        .then(response => response.json())
        .then(data => console.log(data.joke));
    
}