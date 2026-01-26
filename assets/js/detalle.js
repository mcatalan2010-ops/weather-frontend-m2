import lugaresForecastJson from '../../lugares-forecast-api.json' with {type: 'json'};
//console.log(lugaresForecastJson);

//queryselectorall selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');

links.forEach(function (link) {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });


//1. Obtener ID enviado por parametro de la url
const urlParams = new URLSearchParams(window.location.search);

// Extraer ID de los parametros
const locationName = urlParams.get('name');

//2. filtrar lugar del array a partir de la Id
const lugarEncontrado = () => {
  return lugaresForecastJson.find((lugar) => lugar.location.name === locationName,);
};
  
// Ejecutar función para buscar lugar a través de su ID
const ciudadActual = lugarEncontrado();
console.log(ciudadActual);

//3. Capturar contenedor de informacion del lugar
const lugarContainer = document.getElementById('lugar');

const mostrarLugar = () => {
    const content = `
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-lg-4 d-flex justify-content-center align-item-center">
     <img src="${ciudadActual.current.condition.icon}" class="card-image-top">
   </div>
   <div class="col-lg-8">
    <div class="card-body">
     <h2 class="card-title">${ciudadActual.location.name}</h2>
     <ul class="list-group list-group-flush">
   <li class="list-group-item">${ciudadActual.current.condition.text}</li>  
   <li class="list-group-item">TEMPERATURA: ${ciudadActual.current.temp_c}°C</li>
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

ciudadActual.forecast.forecastday.forEach((dia)=> {
  console.log(dia);
    const content = `
    <li class="list-group-item">
    <img src="${dia.day.condition.icon}" class="card-image-top"> ${dia.day.condition.text}: ${dia.day.maxtemp_c} °C </li>`;
    pronosticoContainer.innerHTML += content;
} );

//Mostar estadisticas de la semana
//5. Obtener estadisticas semanales y resumir datos
//5.1 Capturar elementos de la tabla (td -> table datacell)
const minTempcontainer = document.getElementById('minTemp');
const maxTempConteiner = document.getElementById('maxTemp');
const avTempContainer = document.getElementById('avTemp');

// funcion para formatear numeros decimales, que envez de puntos tenga coma
const formatFloatNumber = (num) => {
    return num.toLocaleString('es-CL')
}

const definirEstadoPredominante = (conteoEstados) => {
  let estadoPredominante;

   if (
    conteoEstados.Soleado > conteoEstados.Nublado &&
    conteoEstados.Soleado > conteoEstados.Lluvia &&
    conteoEstados.Soleado > conteoEstados['Parcialmente Nublado']
  ) {
    estadoPredominante = 'Soleado';
  } else if (
    conteoEstados.Nublado > conteoEstados.Soleado &&
    conteoEstados.Nublado > conteoEstados.Lluvia &&
    conteoEstados.Nublado > conteoEstados['Parcialmente Nublado']
  ) {
    estadoPredominante = 'Nublado';
  } else if (
    conteoEstados.Lluvia > conteoEstados.Soleado &&
    conteoEstados.Lluvia > conteoEstados.Nublado &&
    conteoEstados.Lluvia > conteoEstados['Parcialmente Nublado']
  ) {
    estadoPredominante = 'Lluvia';
  } else if (
    conteoEstados['Parcialmente Nublado'] > conteoEstados.Soleado &&
    conteoEstados['Parcialmente Nublado'] > conteoEstados.Nublado &&
    conteoEstados['Parcialmente Nublado'] > conteoEstados.Lluvioso
  ) {
    estadoPredominante = 'Parcialmente Nublado';
  } else {
    estadoPredominante = 'variado';
  }

  return estadoPredominante;
};

//5.2 funcion para calcular estadisticas, devolvera un objeto con los resultados
const estadisticasPronostico = () => {
    //5.2.1 obtener temperatura minima semanal
    const temperaturasMinimas = ciudadActual.forecast.forecastday.map((dia) => dia.day.mintemp_c);
    //console.log(temperaturasMinimas);
const minimaSemanal = Math.min(...temperaturasMinimas);
console.log(minimaSemanal);

//5.2.2 obtener temperatura maxima semanal
const temperaturasMaximas = ciudadActual.forecast.forecastday.map((dia) => dia.day.maxtemp_c);
const maximaSemanal = Math.max(...temperaturasMaximas);

//5.2.3 calcular promedio de temparaturas semanal
const sumaTemperaturasMaximas = temperaturasMaximas.reduce((acumulador, actual) => acumulador + actual,0);

// promedio = sumaElementos / cantidadElementos
const promedioSemanal = parseFloat((sumaTemperaturasMaximas/temperaturasMaximas.length).toFixed(2));

//5.2.4 calcular conteo de dias por estado del clima
const estadosSemanal = ciudadActual.forecast.forecastday.map((dia) => dia.day.condition.text);

const estadosUnicos = [...new Set(estadosSemanal)];

const conteoEstados = {};
 
estadosUnicos.forEach((estado) => {
    conteoEstados[estado] = ciudadActual.forecast.forecastday.filter((dia) => dia.day.condition.text === estado).length;
});

//5.2.5 determinar estado predominante (el mas frecuente) de la semana
const estadoPredominante = definirEstadoPredominante(conteoEstados);

return { 
    minimaSemanal,
    maximaSemanal,
    promedioSemanal: formatFloatNumber(promedioSemanal),
    conteoEstados,
    estadoPredominante,
};
};

const estadisticas = estadisticasPronostico();
minTempcontainer.textContent = estadisticas.minimaSemanal;
maxTempConteiner.textContent = estadisticas.maximaSemanal;
avTempContainer.textContent = estadisticas.promedioSemanal;

console.log(estadisticas);

//usar el conteo de estados de la funcion estadisticasPronostico
//5.2.6 crear resumen textual
const generarMensajeResumen = (estado, tempMax, tempMin) => {
    return `Semana mayormente con clima ${estado}. La temperatura maxima para la semana ${tempMax} °C, y la temperatura minima para la semana de ${tempMin} °C.`;
};

const mensajeResumen = generarMensajeResumen(estadisticas.estadoPredominante, estadisticas.maximaSemanal, estadisticas.minimaSemanal);
console.log(mensajeResumen);

const containerMensajeResumen = document.getElementById('resumen');
containerMensajeResumen.innerHTML = `<p class="text-muted">${mensajeResumen}</p>`;

const encabezadosTablaEstadistica = document.getElementById(
  'titulosEstadistica');

const contenidoTablaEstadistica = document.getElementById('filaEstadistica');

// Ocupar conteo de estados de la función estadisticaPronostico
Object.entries(estadisticas.conteoEstados).forEach(([estado, contador]) => {
  encabezadosTablaEstadistica.innerHTML += `<th scope="col">Días ${estado}</th>`;
  contenidoTablaEstadistica.innerHTML += `<td>${contador}</td>`;
});
