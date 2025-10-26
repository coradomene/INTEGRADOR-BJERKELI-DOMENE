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
        
        let errores = [];

        if (nombre === "");
        errores.push("Por favor ingresa tu nombre.");
    }

        if (!regexEmail.test(email)) { 
            errores.push("Ingresa un Correo Electronico valido.");
        }

        if (!regexTelefono.test(telefono)) {
        errores.push("El teléfono debe tener entre 7 y 15 números.");
    }  

        if (errores.length > 0) {
        errores.forEach(error => {
        const p = document.createElement("p");
        p.style.color = "red";
        p.textContent = error;
        resultado.appendChild(p);
    });

    } else {
        const mensaje = document.createElement("p");
        mensaje.style.color = "green";
        mensaje.textContent = `Gracias, ${nombre}! Tus datos fueron enviados correctamente.`;
        resultado.appendChild(mensaje);

            form.reset();
        }
    });
});


