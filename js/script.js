/* const axios = require('axios'); */
// console.log(buscar);
//
//
// fetch('https://api.themoviedb.org/3/search/movie?api_key=f4ae829d35c414bf37cb8b3989937a71&page=1&query='+buscar)
// .then(res => res.json())
// .then(res => {
//     let peliculas = res.results;
//     console.log(peliculas);
//     peliculas.forEach(pelicula => {
//         console.log(pelicula.title);
//         main.innerHTML += `<div class="pelicula"><h1>Titulo: ${pelicula.title}</h1></div>`;
//     });
//     });


function buscarPeliculas() {
  let main = document.querySelector('#columna');
  let buscar = document.querySelector('#buscador').value;
  let url = 'https://api.themoviedb.org/3/search/movie?api_key=f4ae829d35c414bf37cb8b3989937a71&query=';
  let imagen = document.querySelector('i').src;

  axios.get(url + buscar)
    .then(function(res) {
      let peliculas = res.data.results;
      for (let pelicula of peliculas) {
        main.innerHTML += `
           <div class="card col-lg-3 col-sm-4 col-xs-6 col-12">
           <img src="https://image.tmdb.org/t/p/original${pelicula.poster_path}" class="card-img-top i${pelicula.id}" alt="">
           <div class="card-body">
           <h5 class="card-title">${pelicula.title}</h5>
           <p class="card-text n${pelicula.id}">${pelicula.overview}</p>
           <p><button type="button" onclick="verMas(${pelicula.id})">Ver mas</button></p>
           <button class="btn btn-primary">Ver pelicula</button>
           </div>
          </div>`;
      };
    });
}
function verMas(id){
  document.querySelector('.n'+id).style.cssText='overflow:visible; height:auto';
}
