/* const axios = require('axios'); */

let buscar = document.querySelector('#buscador').value;
let main = document.querySelector('main');
function buscarPeliculas(){
/* axios.get('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=en-US&page=1&include_adult=false&query='+buscar)
.then(function(res){
        let peliculas = res.data.results;
        console.log(peliculas)
}) */
console.log(buscar);


fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=en-US&page=1&include_adult=false&query='+buscar)
.then(res => res.json())
.then(res => {
    const peliculas = res.results;
    peliculas.forEach(pelicula => {
        console.log(pelicula.title);
        main.innerHTML += `<div class="pelicula"><h1>Titulo: ${pelicula.title}</h1></div>`;
    });
    });
}