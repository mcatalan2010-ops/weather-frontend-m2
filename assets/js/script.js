/* manejo del DOM con js */
var links = document.querySelectorAll('.nav-link');
console.log(links);

links.forEach(function(link){
    if(link.href === window.location.href){
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
    });

    var cardLinks = document.querySelectorAll('.card-link');
//console.log(cardLinks);
cardLinks.forEach(function (link){
    link.addEventListener('click', function() {
        window.location.href = './detalle.html';
    });
});