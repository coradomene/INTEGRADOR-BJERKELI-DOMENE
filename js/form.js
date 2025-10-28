//console.log("form.js se esta ejecutando correctamente");
document.addEventListener("DOMContentLoaded" , function() {
    const form = document.getElementById("formContacto");
    //const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event){
        event.preventDefault(); 
        console.log(" Se detectó el envío del formulario");

        document.getElementById("errorNombre").textContent=""
        document.getElementById("errorEmail").textContent=""
        document.getElementById("errorTelefono").textContent=""

        

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const telefono = document.getElementById("telefono").value.trim();


        const regexEmail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexTelefono = /^[0-9]{7,15}$/;   
        
        
        let hayError= false;

        if (nombre === ""){
            document.getElementById("errorNombre").textContent = "por favor ingrese su nombre";
        hayError = true
    }
        if (email==="") {document.getElementById("errorEmail").textContent = "por favor ingresa tu email";
            hayError = true
        }else if (!regexEmail.test(email)) {
            document.getElementById("errorEmail").textContent = "Ingresa un Correo Electronico valido.";
            hayError = true;
        }
        if (telefono===""){ 
            document.getElementById("errorTelefono").textContent = "por favor ingrese su telefono";
            hayError = true;
        }else if (!regexTelefono.test(telefono)){
        document.getElementById("errorTelefono").textContent = "el telefono debe tener entre 7 y 15 numeros";
        hayError = true;
    }  

        if (!hayError){
            alert(`gracias, ${nombre}!!! tus datos fueron enviados con exito`);
            form.reset();
        }
        
        
    });
});
