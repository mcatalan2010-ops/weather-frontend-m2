# Proyecto de portafolio correspondiente a modulo 2
Desarrollar la primera versión (MVP) del frontend de una aplicación de clima, aplicando HTML5 semántico, Bootstrap para estilos y diseño responsivo, y JavaScript básico para la interacción. El trabajo se versiona en Git/GitHub e incluye un README descriptivo.

---

## Aplicacion del tiempo
Esta aplicacion muestra el clima en 12 localidades de la IX region.
Al hacer click en una de las localidades, te llevara a una vista de detalle mostrando el tiempo actual junto con un pronostico para la proxima semana.

## requisitos funcionales
- Ejemplo de uso de JS 1: navegacion desde card

```JS
cardLinks.forEach(function (link){
    link.addEventListener('click', function() {
        window.location.href = './detalle.html';
    });
});
```
- Ejemplo de uso de JS 2: modificando clases dependiendo de la ubicacion:

```JS
inks.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });
```
## Proyecto de portafolio modulo 3
Se continua trabajando en el proyecto de desarrollar versión (MVP) del frontend de una aplicación de clima, aplicando HTML5 semántico, Bootstrap para estilos y diseño responsivo, y JavaScript básico para la interacción. El trabajo se versiona en Git/GitHub e incluye un README descriptivo.
Para el modulo 3 se complementa el uso de metodologia BEM uso de SASS entre otros parametros solicitados.

## Metodologia de estilos
en su mayoria se utiliza la metodologia BEM que era parte de la solicitado

## SASS y Modulorizacion
Se crea estructura basica de SASS con el sistema de 7*1
Se utilizan variables, anidamientos, mixins.
Se agrega paleta de colores


# Proyecto de portafolio - Módulo 4

## Requisitos técnicos

### Modelado de datos

- [x] Definir en JavaScript un arreglo de lugares donde cada lugar sea un objeto con al menos:
- [x] id, nombre, tempActual, estadoActual
- [x] pronosticoSemanal: arreglo de objetos (cada objeto será un día de la semana) con dia, min, max y estado

### Variables, condicionales, ciclos y funciones

- [x] Utilizar variables y constantes para guardar datos intermedios (suma de temperaturas, contadores, etc.).
- [x] Utilizar ciclos (for, while o similar) para recorrer el pronóstico semanal y:
  - [x] Calcular mínimo, máximo y promedio:
  - [x] Contar cuántos días hay de cada tipo de clima.
- [x] Utilizar condicionales (if, else if, else) para:
  - [x] Evaluar estados del tiempo (ej.: si hay más días soleados que nublados → “Semana mayormente soleada”).
  - [x] Generar el resumen textual de la semana.
- [x] Definir al menos dos funciones:
  - [x] Una función para buscar y obtener el objeto lugar a partir de un id o nombre.
  - [x] Una función para calcular estadísticas a partir del pronosticoSemanal de un lugar y devolver un objeto con los resultados.

 # Proyecto de portafolio - Módulo 5
Reestructurar la lógica de la App de Clima utilizando Programación Orientada a Objetos (POO) y funcionalidades modernas de JavaScript ES6+, e implementar el consumo de una API de clima (http://api.weatherapi.com) mediante programación asíncrona (fetch, promesas, async/await).
En esta iteración, el foco está en cómo está organizado el código JavaScript (clases, módulos lógicos, funciones reutilizables) y en la integración con una API externa para obtener datos reales o simulados de clima para tus lugares. 

## Requisitos funcionales mínimos
•   Home: Mostrar un listado de ≥ 5 lugares con clima actual (temperatura y estado) obtenido desde la API o combinando datos locales + API.
•   Detalle de lugar: 
    o  Mostrar el pronóstico de varios días (lista o cards) obtenido desde la API (o simulado a partir de la respuesta). 
    o  Mantener la sección “Estadísticas de la semana”:
             Temperatura mínima, máxima y promedio.
             Cantidad de días de al menos 2 tipos de clima (ej.: soleado / lluvia).
    o  Mostrar una sección “Alertas de clima” con al menos 1 regla simple, por ejemplo:
             Si el promedio de la semana > X °C → “Alerta de calor”.
             Si hay ≥ N días de lluvia → “Semana lluviosa”.


## Requisitos técnicos POO y ES6+

### Modelado de datos
- [x] Implementar al menos una clase principal, por ejemplo:
    'async fetchWeather(lugares) {
      try {
          const promises = lugares.map(async (lugar) => {
            const response = await fetch(`${this.#url}&q=${lugar}`);
            return await response.json();
          });'
- [x] Se pueden definir clases adicionales si tiene sentido (ej.: LugarClima, ApiClient).Por ejemplo:
    'async fetchWeatherByName(lugar) {
        try {
          const response = await fetch(`${this.#urlForecast}&q=${lugar}`);
          if (!response.ok) {
            throw new Error('No se pudo obtener el clima de la ciudad');
         }'
- [x] Utilizar ES6+ en el código: let y const en lugar de var. Arrow functions donde sean apropiadas. Parámetros por defecto en funciones cuando tenga sentido. Template literals para construir cadenas (por ejemplo, fragmentos de HTML o mensajes).
- [x] 

### Programación asíncrona y consumo de API
- [x] Utilizar Fetch API (o XHR) para obtener datos de clima desde una API externa. Se utilizo la http://api.weatherapi.com
- [x] Manejar la respuesta asíncrona mediante: Promesas (then/catch) y/o async/await (recomendado).
- [x] Procesar la respuesta JSON para: Mapear los datos al formato interno de la app (arreglos/objetos). Y Volver a usar la lógica de estadísticas del Módulo 4.
- [x] Manejar al menos un caso de error simple: Mostrar un mensaje en la interfaz si la API no responde o si hay un problema al cargar los datos.

### DOM y actualización de la interfaz
- [x] Utilizar el DOM para: Renderizar dinámicamente el listado de lugares en Home, en base a los datos obtenidos de la API. Renderizar el pronóstico y las estadísticas en la vista de detalle. Mostrar/ocultar mensajes de “Cargando…” o “Error al cargar los datos”. 



