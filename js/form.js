document.addEventListener("DOMContentLoaded" , function()) {
    const form = document.getElementById("formContacto");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event){
        event.preventDefault(); 
        resultado.innerHTML = "";

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();


        const regexEmail = /^[\w.-]+@[a-zA-Z09.-]+\.[a-zA-Z]{2,}$/;
        
    }
}