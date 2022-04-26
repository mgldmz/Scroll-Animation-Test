var cat = document.getElementById('cat');

var scrolledY; //funcionaria con un escalador, cuanto has bajado en pixeles empezando por 0 (window.ScrollY)
var topCat;
var totalHeight = document.body.offsetHeight; //altura fija de la pantalla visible (window.innerHeight)
var screenSize = window.innerHeight; //Altura de toda la pagina web incluyendo lo no visible (document.body.offsetHeight)


window.addEventListener('scroll', ()=>{
    scrolledY = window.scrollY;
    topCat = screenSize*scrolledY/totalHeight;
    cat.style.top = `${topCat}px`

})
