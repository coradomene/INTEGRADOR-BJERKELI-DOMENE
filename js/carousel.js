document.addEventListener("DOMContentLoaded",function(){ const imagenes = [
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


function mostrarImagen(){ 
    imgE1.src = imagenes[indice];
        console.log("mostrando: ",imagenes [indice]);
    }
    

    btnNext.addEventListener("click",()=>{
        indice++;
        if(indice >= imagenes.length){
            indice=0;
        }
        mostrarImagen();
    });

    btnPrev.addEventListener("click",()=>{
        indice--;
        if(indice<0){
            indice = imagenes.length -1;
        }
    
    mostrarImagen();
});
    mostrarImagen();
});





