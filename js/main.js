const url = 'https://icanhazdadjoke.com/';
var header = { 
        headers: { Accept: "application/json" },
    };

function getData(){

    fetch(url,header)
        .then(response => response.json())
        .then(data => console.log(data.joke));
    
}