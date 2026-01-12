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
    conteoEstados.Soleado > conteoEstados['Parcialmente nublado']
  ) {
    estadoPredominante = 'Soleado';
  } else if (
    conteoEstados.Nublado > conteoEstados.Soleado &&
    conteoEstados.Nublado > conteoEstados.Lluvia &&
    conteoEstados.Nublado > conteoEstados['Parcialmente nublado']
  ) {
    estadoPredominante = 'Nublado';
  } else if (
    conteoEstados.Lluvia > conteoEstados.Soleado &&
    conteoEstados.Lluvia > conteoEstados.Nublado &&
    conteoEstados.Lluvia > conteoEstados['Parcialmente nublado']
  ) {
    estadoPredominante = 'Lluvia';
  } else if (
    conteoEstados['Parcialmente nublado'] > conteoEstados.Soleado &&
    conteoEstados['Parcialmente nublado'] > conteoEstados.Nublado &&
    conteoEstados['Parcialmente nublado'] > conteoEstados.Lluvioso
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
    const temperaturasMinimas = ciudadActual.pronosticoSemanal.map((dia) => dia.min);
    //console.log(temperaturasMinimas);
const minimaSemanal = Math.min(...temperaturasMinimas);
console.log(minimaSemanal);

//5.2.2 obtener temperatura maxima semanal
const temperaturasMaximas = ciudadActual.pronosticoSemanal.map((dia) => dia.max);
const maximaSemanal = Math.max(...temperaturasMaximas);

//5.2.3 calcular promedio de temparaturas semanal
const sumaTemperaturasMaximas = temperaturasMaximas.reduce((acumulador, actual) => acumulador + actual,0);

// promedio = sumaElementos / cantidadElementos
const promedioSemanal = parseFloat((sumaTemperaturasMaximas/temperaturasMaximas.length).toFixed(2));

// crear mensaje resumen de las estadisticas: cantidad de dias por tipo de clima, resumen textual (semana mayormente soleada, nublada, etc.)
//5.2.4 calcular conteo de dias por estado del clima
const estadosSemanal = ciudadActual.pronosticoSemanal.map((dia) => dia.estado);
const estadosUnicos = [...new Set(estadosSemanal)];

const conteoEstados = {};
 
estadosUnicos.forEach((estado) => {
    conteoEstados[estado] = ciudadActual.pronosticoSemanal.filter((dia) => dia.estado === estado).length;
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
