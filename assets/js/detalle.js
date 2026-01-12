import lugares from "./lugares.js";

//queryselectorall selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });


// Para agregar iconos dinamicamente dependiendo del estado actual del clima    
const ICONOS = {
    Soleado: 'bi-brightness-high',
    Nublado: 'bi-cloudy-fill',
    Lluvia: 'bi-cloud-rain-heavy',
    'Parcialmente Nublado': 'bi-cloud-sun',
};   

//1. Obtener ID enviado por parametro de la url
const urlParams = new URLSearchParams(window.location.search);

// Extraer ID de los parametros
const locationId = urlParams.get('id');

//2. filtrar lugar del array a partir de la Id
const lugarEncontrado = () => {
  const lugar = lugares.find((lugar) => {
    console.log(`Buscando en array lugares el lugar con id: ${locationId}`);
    return lugar.id == locationId;
  });
  return lugar;
};

// Ejecutar función para buscar lugar a través de su ID
const ciudadActual = lugarEncontrado();

//3. Capturar contenedor de informacion del lugar
const lugarContainer = document.getElementById('lugar');

const mostrarLugar = () => {
    const content = `
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-lg-4 d-flex justify-content-center align-item-center">
      <i class="bi ${ICONOS[ciudadActual.estadoActual]}" style="font-size: 90px"></i>
    </div>
    <div class="col-lg-8">
      <div class="card-body">
        <h2 class="card-title">${ciudadActual.nombre}</h2>
        <ul class="list-group list-group-flush">
    <li class="list-group-item">${ciudadActual.estadoActual}</li>  
    <li class="list-group-item">TEMPERATURA: ${ciudadActual.tempActual}°C</li>
  </ul>
        <p class="card-text"><small class="text-body-secondary">Ultima actualizacion hace 5 minutos</small></p>
      </div>
    </div>
  </div>
</div>`;

lugarContainer.innerHTML += content;
};
 
mostrarLugar();

// Mostrar seccion de pronostico semanal
const pronosticoContainer = document.getElementById("pronosticoSemanal");

ciudadActual.pronosticoSemanal.forEach((dia)=> {
    const content = `
    <li class="list-group-item">
    <i class="bi ${ICONOS[dia.estado]}"></i> ${dia.dia}: ${dia.max} °C </li>`;
    pronosticoContainer.innerHTML += content;

} );