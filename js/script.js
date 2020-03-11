/* const axios = require('axios'); */

let buscar = document.querySelector('#buscador').value;
let main = document.querySelector('main');
function buscarPeliculas(){
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=f4ae829d35c414bf37cb8b3989937a71&query='+buscar)
        .then(function(res){
            console.log(buscar);
            let peliculas = res.data.results;
            for(let pelicula of peliculas){
            console.log(pelicula.title)
            }
        });
}



/* fetch('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&query='+buscar)
.then(res => res.json())
.then(res => {
    let peliculas = res.results;
    for(let pelicula of peliculas){
        console.log(pelicula.title);
    } 
    peliculas.forEach(pelicula => {
        console.log(pelicula.title);
        main.innerHTML += `<div class="pelicula"><h1>Titulo: ${pelicula.title}</h1></div>`;
    });
 }); */
