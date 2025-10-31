document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacto");
    const resultado = document.getElementById("resultado");

    form.addEventListener("submit", function (event) {
    event.preventDefault();
    resultado.innerHTML = ""; // limpia mensajes anteriores

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    const regexEmail = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexTelefono = /^[0-9]{7,15}$/;

    let errores = [];

    if (nombre === "") {
        errores.push("Por favor ingresá tu nombre.");
    }

    if (!regexEmail.test(email)) {
        errores.push("Ingresá un correo electrónico válido.");
    }

    if (!regexTelefono.test(telefono)) {
        errores.push("El teléfono debe tener entre 7 y 15 números.");
    }

    if (errores.length > 0) {
        errores.forEach((error) => {
        const p = document.createElement("p");
        p.textContent = error;
        p.style.color = "white";
        p.style.backgroundColor = "red";
        p.style.padding = "8px";
        p.style.borderRadius = "6px";
        p.style.marginBottom = "8px";
        resultado.appendChild(p);
});
    } else {
        const mensaje = document.createElement("p");
        mensaje.textContent = `Gracias, ${nombre}! Tus datos fueron enviados correctamente.`;
        mensaje.style.color = "white";
        mensaje.style.backgroundColor = "green";
        mensaje.style.padding = "8px";
        mensaje.style.borderRadius = "6px";
        resultado.appendChild(mensaje);
        form.reset();
    }
});
});
