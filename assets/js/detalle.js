//queryselectorall selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');
console.log(links);

links.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });

    // array de lugares: contendra el listado de cuidades (minimo 5)
/* id, nombre del lugar, temperatura actual, estado actual, pronostico semanal (array de objetos) */

const lugares = [
    {
        id: 1,
        nombre: 'TEMUCO',
        tempActual: 26,
        estadoActual: 'Soleado',
        pronosticoSemanal: [
            {
            dia: 'Lunes',
            min: 12,
            max: 26,
            estado: 'Soleado', 
            },
            {
            dia: 'Martes',
            min: 11,
            max: 23,
            estado: 'Soleado',
           },
           {
            dia: 'Miercoles',
            min: 10,
            max: 23,
            estado: 'Soleado',
           },
           {
            dia: 'Jueves',
            min: 9,
            max: 20,
            estado: 'Soleado',
           },
           {
            dia: 'Viernes',
            min: 9,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Sabado',
            min: 9,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Domingo',
            min: 7,
            max: 17,
            estado: 'Soleado',
           },
        ],
        };
    {
        id: 2,
        nombre: 'ANGOL',
        tempActual: 26,
        estadoActual: 'Soleado',
        pronosticoSemanal: [
           { 
            dia: 'Lunes',
            min: 12,
            max: 28,
            estado: 'Soleado',
           },
           {
            dia: 'Martes',
            min: 12,
            max: 27,
            estado: 'Soleado',
           },
           {
            dia: 'Miercoles',
            min: 14,
            max: 28,
            estado: 'Soleado',
           },
           {
            dia: 'Jueves',
            min: 12,
            max: 29,
            estado: 'Soleado',
           },
           {
            dia: 'Viernes',
            min: 10,
            max: 29,
            estado: 'Soleado',
           },
           {
            dia: 'Sabado',
            min: 12,
            max: 29,
            estado: 'Soleado',
           },
           {
            dia: 'Domingo',
            min: 11,
            max: 28,
            estado: 'Soleado',
           },
        ],
    },
    {
        id: 3,
        nombre: 'LOS ALAMOS',
        tempActual: 15,
        estadoActual: 'Nublado',
        pronosticoSemanal: [
           { 
            dia: 'Lunes',
            min: 7,
            max: 15,
            estado: 'Nublado',
           },
           {
            dia: 'Martes',
            min: 6,
            max: 14,
            estado: 'Nublado',
           },
           {
            dia: 'Miercoles',
            min: 8,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Jueves',
            min: 9,
            max: 20,
            estado: 'Nublado',
           },
           {
            dia: 'Viernes',
            min: 9,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Sabado',
            min: 9,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Domingo',
            min: 7,
            max: 17,
            estado: 'Nublado',
           },
        ],
    },
    {
        id: 4,
        nombre: 'CONTULMO',
        tempActual: 17,
        estadoActual: 'Nublado',
        pronosticoSemanal: [
           { 
            dia: 'Lunes',
            min: 6,
            max: 17,
            estado: 'Nublado',
           },
           {
            dia: 'Martes',
            min: 8,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Miercoles',
            min: 10,
            max: 18,
            estado: 'Nublado',
           },
           {
            dia: 'Jueves',
            min: 9,
            max: 20,
            estado: 'Nublado',
           },
           {
            dia: 'Viernes',
            min: 9,
            max: 19,
            estado: 'Nublado',
           },
           {
            dia: 'Sabado',
            min: 9,
            max: 19,
            estado: 'Parcialmente Nublado',
           },
           {
            dia: 'Domingo',
            min: 7,
            max: 19,
            estado: 'Parcialmente Nublado',
           },
        ],
    },
    {
        id: 5,
        nombre: 'QUEULE',
        tempActual: 18,
        estadoActual: 'Lluvia',
        pronosticoSemanal: [
           { 
            dia: 'Lunes',
            min: 9,
            max: 18,
            estado: 'Lluvia',
           },
           {
            dia: 'Martes',
            min: 11,
            max: 20,
            estado: 'Lluvia',
           },
           {
            dia: 'Miercoles',
            min: 10,
            max: 20,
            estado: 'Lluvia',
           },
           {
            dia: 'Jueves',
            min: 9,
            max: 20,
            estado: 'Lluvia',
           },
           {
            dia: 'Viernes',
            min: 9,
            max: 19,
            estado: 'Lluvia',
           },
           {
            dia: 'Sabado',
            min: 10,
            max: 19,
            estado: 'Lluvia',
           },
           {
            dia: 'Domingo',
            min: 9,
            max: 18,
            estado: 'Lluvia',
           },
        ],
    },
    {
        id: 6,
        nombre: 'LONCOCHE',
        tempActual: 16,
        estadoActual: 'Lluvia',
        pronosticoSemanal: [
           { 
            dia: 'Lunes',
            min: 12,
            max: 16,
            estado: 'Lluvia',
           },
           {
            dia: 'Martes',
            min: 11,
            max: 20,
            estado: 'Lluvia',
           },
           {
            dia: 'Miercoles',
            min: 10,
            max: 17,
            estado: 'Lluvia',
           },
           {
            dia: 'Jueves',
            min: 9,
            max: 19,
            estado: 'Lluvia',
           },
           {
            dia: 'Viernes',
            min: 9,
            max: 18,
            estado: 'Lluvia',
           },
           {
            dia: 'Sabado',
            min: 9,
            max: 17,
            estado: 'Lluvia',
           },
           {
            dia: 'Domingo',
            min: 7,
            max: 18,
            estado: 'Lluvia',
           },
        ],
    },
    ];
 
// Para agregar iconos dinamicamente dependiendo del estado actual del clima    
const ICONOS = {
    Soleado: 'bi-brightness-high',
    Nublado: 'bi-cloudy-fill',
    Luvia: 'bi-cloud-rain-heavy',
    'Parcialmente Nublado': 'bi-cloud-sun',
};   

//1. Obtener ID enviado por parametro de l url
cont urlParams = new URLSearchParams(window.location.search);

// Extraer ID de los parametros
const locationID = urlParams.get('id');

//2. filtrar lugar del array a partir de la Id
