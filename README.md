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
