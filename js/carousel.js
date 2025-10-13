document.addEventListener("DOMContentLoaded",function(){ const imagenes = [
    "img/gatito1.jpeg",
    "img/gatito2.jpeg",
    "img/gatito3.jpeg",
    "img/gatito4.jpeg",
    "img/gatito5.jpeg",
    "img/gatito6.jpeg",
    "img/gatito7.jpeg",
]
const textos = [
    "Brayan: le encanta jugar, comer y dormir, ya que es pequeño aun ",
    "Coco: es muy timido pero muy amistoso",
    "Kevin: es muy travieso pero muy cariñoso",
    "Jaimito: rescatado de la calle, por eso su condicion, esta hace 6 meses con nosotros es super cariñoso",
    "Ina: ella llego sola al refugio es mimosa pero no le gustan las fotos jaja",
    "Gaston: rescatado de la calle, es un gato grande que solo busca tranquilidad y amor",
    "Caramelo: llego hace tres meses y ama tomar leche (deslactosada)",
]
let indice =0;

const imgE1 = document.getElementById("imagen");
const textoE1 = document.getElementById("texto-imagen");
const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");


function mostrarImagen(){ 
    imgE1.src = imagenes[indice];
    textoE1.textContent = textos[indice];
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





