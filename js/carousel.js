document.addEventListener("DOMContentLoaded",function(){ const images = [
    "img/gatito1.jpeg",
    "img/gatito2.jpeg",
    "img/gatito3.jpeg",
    "img/gatito4.jpeg",
    "img/gatito5.jpeg",
    "img/gatito6.jpeg",
    "img/gatito7.jpeg",
]
let indice =0;
const imgE1 = document.getElementById("imagen");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");

if (!imgE1|| !btnNext  || !btnPrev) return;

function mostrarImagen(){ 
    imgE1.src = imagenes[indice];
    }
    
    function siguiente(){
        indice = (indice+1)% imagenes.length;
        mostrarImagen();
    }

    function anterior(){
        indice = (indice-1+ imagenes.length)% imagenes.length;
        mostrarImagen();
    }

    btnNext.addEventListener("click",siguiente);
    btnPrev.addEventListener("click",anterior);
    mostrarImagen();
});





