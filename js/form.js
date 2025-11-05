//console.log("form.js se esta ejecutando correctamente");
document.addEventListener("DOMContentLoaded" , function() {
    const form = document.getElementById("formContacto");
    const resultado = document.getElementById("resultado");
    document.getElementById("telefono").addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, ""); 
});
        
        document.getElementById("nombre").addEventListener("input", function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
});

    form.addEventListener("submit", function (event){
        event.preventDefault(); 
        console.log(" Se detectó el envío del formulario");

        document.getElementById("errorNombre").textContent=""
        document.getElementById("errorEmail").textContent=""
        document.getElementById("errorTelefono").textContent=""

        

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();

        //const regexNombre = /^[a-zA-Z]{3,20}$/;
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,20}$/;
        const regexEmail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexTelefono = /^[0-9]{7,15}$/;   
        
        /*document.getElementById("telefono").addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9]/g, ""); 
});
        
        document.getElementById("nombre").addEventListener("input", function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
});*/

        let hayError= false;

        if (nombre === ""){
            document.getElementById("errorNombre").textContent = "Por favor ingrese su nombre";
        hayError = true
    }   else if (!regexNombre.test(nombre)) {
            document.getElementById("errorNombre").textContent = "Ingresa un nombre con minimo 3 y maximo 20 caracteres validos.";
            hayError = true;
    }
        if (email==="") {document.getElementById("errorEmail").textContent = "Por favor ingresa tu email";
            hayError = true
        }else if (!regexEmail.test(email)) {
            document.getElementById("errorEmail").textContent = "Ingresa un Correo Electronico valido.";
            hayError = true;
        }
        if (telefono===""){ 
            document.getElementById("errorTelefono").textContent = "Por favor ingrese su telefono";
            hayError = true;
        }else if (!regexTelefono.test(telefono)){
        document.getElementById("errorTelefono").textContent = "El telefono debe tener entre 7 y 15 numeros";
        hayError = true;
    }  

        if (!hayError) {
        resultado.innerHTML = `Gracias, ${nombre}!<br> Tus datos fueron enviados con éxito.`;
        resultado.style.color = "yellow ";

        form.reset();
        
        } 
    });
});
