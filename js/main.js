// alert("Hola Mundo");
// las alertas se utilizan para dar un mensaje al usuario y verificar que este unido el html con el js 

// Hacer una petición para un usuario con ID especifico
let ip = document.getElementsById("ip");
let pais = document.getElementsById("pais");
let continente = document.getElementsById("continente");
let zona_horaria = document.getElementsById("zona_horaria");


const solicitudAPI = () => {

  axios // es una palabra reservada 
    .get("https://salmacano.000webhostapp.com/GeoIPLocation/index.php")

    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response.data);
      pais.innerHTML = response.data.pais;
      continente.innerHTML = response.data.continenteontinente
      zona_horaria.innerHTML = response.data.zona_horaria;

    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });


  // then, catch y finally es un argumento que tiene dengtro una funcion 

};

//Llama al evento LOAD, que sifnifica cargar pagina cada vez que se refresca o actualiza la pagina 
// y llama a la funcion solicitud API que tiene la rutina 
// de llamar a la API desde axios 
window.addEventListener('load', solicitudAPI);
