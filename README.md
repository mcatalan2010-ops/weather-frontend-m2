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

