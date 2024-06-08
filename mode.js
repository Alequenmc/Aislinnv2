document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("moderatorForm");
    const successMessage = document.getElementById("mensajeExito");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (form.checkValidity()) {
            enviarFormulario();
        } else {
            mostrarMensajeError("Por favor completa todos los campos.");
        }
    });

    function enviarFormulario() {
        const formData = new FormData(form);
        fetch(form.action, {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                mostrarMensajeExito();
            } else {
                mostrarMensajeError("Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.");
            }
        })
        .catch(error => {
            mostrarMensajeError("Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.");
            console.error("Error:", error);
        });
    }

    function mostrarMensajeExito() {
        form.reset();
        successMessage.style.display = "block";
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 5000);
    }

    function mostrarMensajeError(mensaje) {
        alert(mensaje);
    }
});