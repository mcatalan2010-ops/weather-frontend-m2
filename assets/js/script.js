<<<<<<< HEAD
// manejo del DOM con js 
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


    // manejo de evento
    var cardLinks = document.querySelectorAll('.card-link');
//console.log(cardLinks);
cardLinks.forEach(function (link){
    link.addEventListener('click', function() {
        window.location.href = './detalle.html';
    });
=======
// manejo del DOM con js 
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


    // manejo de evento
    var cardLinks = document.querySelectorAll('.card-link');
//console.log(cardLinks);
cardLinks.forEach(function (link){
    link.addEventListener('click', function() {
        window.location.href = './detalle.html';
    });
>>>>>>> def8bbc5a39fdf85aaf42592b9727a292b0238a9
});