//import lugares from "./lugares.js"; 
import lugaresJson from '../../lugares-api.json' with { type: 'json'};

const lugaresContainer = document.getElementById('lugares')

//console.log(lugaresJson)

class WheatherApp {
    weather = [];

    constructor(lugares) {
        //representa todos los lugares que queramos presentar en la app
        this.lugares = lugares;
    }


    //obtener datos del clima actual de 6 ciudades
    fetchWeather() {
        this.weather = lugaresJson;
    }

    //Para mostrar lugares en el index
    insertCardToDom(lugar) {
        console.log(lugar);
       const tarjeta = `
    <div class="col">
    <div class="card h-100 text-center">
      <img src="${lugar.current.condition.icon}" class="card-image-top" >
      <div class="card-body">
        <h5 class="card-title">${lugar.location.name}</h5>
        <p class="card-text">${lugar.current.temp_c}°C</p>
        <p class="card-text">${lugar.current.condition.text}</p>
      </div>
      <div class="card-footer bg-transparent boder-0">
        <a class="card-link" href="./detalle.html?name=${lugar.location.name}">Ver Detalle</a>
      </div>
    </div>
  </div>`; 

  lugaresContainer.innerHTML += tarjeta;
    }

    //metodo que ejecuta peticion a api y rellena el dom con respuesta de la api
    renderWeather() {
        this.fetchWeather();
        this.weather.forEach((ciudad) => {
            this.insertCardToDom(ciudad);
        });
        }
}

//instancia de clase de wheatherapp
const app = new WheatherApp([
    'Temuco',
    'Angol',
    'Los Alamos',
    'Contulmo',
    'Queule',
    'Loncoche',
]);

//ejecuta metodo principal de la clase
app.renderWeather();
 
 //manejo del DOM con js 
//queryselectorall selecciona todos los elementos. En este caso todos los que tienen clase nav-link
var links = document.querySelectorAll('.nav-link');
//console.log(links);
 
links.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });

