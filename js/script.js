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
  let url = 'https://api.themoviedb.org/3/search/movie?api_key=fd52edceaa66d53f219424c4d6b91b14&query=';

  axios.get(url + buscar)
    .then(function(res) {
      let peliculas = res.data.results;
      for (let pelicula of peliculas) {
        buscarGeneros(pelicula.genre_ids[0]);
        /* for(let idGenero of pelicula.genre_ids){
          // idGenero contiene los IDs de cada pelicula buscada
          buscarGeneros(idGenero);  
        } */
    
       main.innerHTML += `<div class='card col-lg-3 col-sm-4 col-xs-6 col-12'>
        <img src='https://image.tmdb.org/t/p/original${pelicula.poster_path}' class='card-img-top i${pelicula.id}' alt=''>
        <div class='card-body'>
        <h5 class='card-title'>${pelicula.title}</h5>
        <p class="genero g${pelicula.genre_ids[0]}"></p>
        <p class='card-text b${pelicula.id}'>${pelicula.overview}</p>
        <p class="boton n${pelicula.id}"></p>
        <p><button class='btn btn-dark'>Ver pelicula</button></p>
        </div>
        </div>`;
        if(pelicula.overview.length > 190){
          document.querySelector('.n'+pelicula.id).innerHTML = `<button class='n${pelicula.id} btn btn-info' onclick='verMas(${pelicula.id})'>Ver mas</button>`;
        }
         document.querySelector('.card-img-top').addEventListener("load", function() {
          cambiarImg(pelicula.id);
        });
      };
    })
}



function buscarGeneros(id){
 fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=fd52edceaa66d53f219424c4d6b91b14&language=en-US')
 .then(res => res.json())
 .then(res => {
     let generos = res;
     let genero = Object.values(generos);
     //Genero contiene todos los IDs y nombres existentes.
     genero.forEach(element => {
      for(let item of element){
        if(id == item.id){
        console.log(id,item.name)
        document.querySelector('.g'+id).innerHTML = `${item.name}`
        }
      }
     });
     });
    }

function cambiarImg(id) {
  let imagen = document.querySelector('.i' + id);
  if (imagen.src === 'https://image.tmdb.org/t/p/originalnull') {
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
  if(palabras < 100){
    console.log('estoy dentro')
/*     document.querySelector('btn-dark').style.marginTop = '54px';
 */  }
}

function verMas(id) {
  document.querySelector('.b' + id).style.cssText = 'overflow:visible; height:auto';
}
