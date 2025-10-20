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
    "Brayan: Le encanta jugar,comer y dormir ya que es pequeño aun ",
    "Coco: Es timido pero muy amistoso",
    "Kevin: Es muy travieso pero le encantan las caricias",
    "Jaimito: Rescatado de la calle es por eso su condicion, esta hace 6 meses con nosotros el es cariñoso y le gustan los niños",
    "Ina: Ella llego sola al refugio es mimosa pero no le gustan las fotos",
    "Gaston: Rescatado de la calle, es un gato grande que solo busca tranquilidad y amor",
    "Caramelo: Llego hace tres meses y ama tomar leche (deslactosada) ya que tiene solo 4 meses",
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





