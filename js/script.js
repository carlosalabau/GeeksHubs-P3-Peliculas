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

  axios.get(url + buscar)
    .then(function(res) {
      let peliculas = res.data.results;
      for (let pelicula of peliculas) {
        main.innerHTML += `
           <div class="card col-lg-3 col-sm-4 col-xs-6 col-12">
           <img src="https://image.tmdb.org/t/p/original${pelicula.poster_path}" class="card-img-top i${pelicula.id}" alt="">
           <div class="card-body">
           <h5 class="card-title">${pelicula.title}</h5>
           <p class="card-text b${pelicula.id}">${pelicula.overview}</p>

           <button class="btn btn-primary">Ver pelicula</button>
           </div>
          </div>`;
        document.querySelector('.card-img-top').addEventListener("load", function() {
          cambiarImg(pelicula.id)
        });
        document.querySelector('.card-text').addEventListener("load", function(){
          addBoton(pelicula.overview.length,pelicula.id);
        })
      };
    });
}

function cambiarImg(id) {
  let imagen = document.querySelector('.i' + id);
  if (imagen.src == 'https://image.tmdb.org/t/p/originalnull') {
    imagen.src = 'img/nofoto.jpg';
  }
}
function addBoton(palabras,id){
  console.log('entro!')
  let texto = document.querySelector('.b'+id);
  let boton = '<button class="n"'+id+" >Ver mas</button>"
  if(palabras > 190){
    texto.appendChild(boton);
  }
}
function verMas(id) {
  document.querySelector('.n' + id).style.cssText = 'overflow:visible; height:auto';
}
