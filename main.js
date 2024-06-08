document.addEventListener("DOMContentLoaded", function() {
  const chatToggle = document.getElementById("chat-toggle");
  const chatContainer = document.getElementById("chat-container");
  const chatMessages = document.getElementById("chat-messages");
  const userInput = document.getElementById("user-input");
  const sendButton = document.getElementById("send-button");

  // Respuestas predefinidas
// Respuestas predefinidas adicionales
const predefinedResponses = {
  "¿Por qué no funciona Aislinn?": "Podría ser por problemas con el servidor. Intenta de nuevo en unos minutos. Si el problema persiste, contacta a los moderadores.",
  "¿Cómo puedo contactar a Aislinn?": "Puedes encontrar información de contacto en la sección 'Información de Contacto'.",
  "No encuentro la opción que necesito en Aislinn.": "Asegúrate de revisar la documentación o preguntar en el grupo de soporte.",
  "Aislinn tarda mucho en responder.": "El tiempo de respuesta puede variar según la carga del servidor. Intenta nuevamente más tarde. Si el problema persiste, contacta a los moderadores.",
  "¿Aislinn tiene alguna limitación en cuanto al número de usuarios?": "Aislinn está diseñada para manejar un número ilimitado de usuarios simultáneos.",
  "¿Cómo puedo personalizar las respuestas de Aislinn?": "Puedes personalizar las respuestas de Aislinn modificando su configuración en la sección de ajustes o enviando 'menu ajustes aislinn' en WhatsApp.",
  "¿Cuál es el horario de atención de Aislinn?": "Aislinn está disponible las 24 horas del día, los 7 días de la semana.",
  "¿Aislinn ofrece soporte técnico?": "Sí, Aislinn ofrece soporte técnico a través de su centro de ayuda en línea y por correo electrónico.",
  "¿Puedo usar Aislinn en varios dispositivos?": "Sí, puedes acceder a Aislinn desde múltiples dispositivos utilizando la misma cuenta.",
  "¿Aislinn tiene alguna aplicación móvil?": "Actualmente, Aislinn está disponible como una aplicación web accesible desde cualquier navegador.",
  "¿Cómo puedo eliminar mi cuenta de Aislinn?": "Puedes eliminar tu cuenta de Aislinn desde la sección de configuración de tu perfil.",
  "¿Aislinn ofrece servicios premium?": "Sí, Aislinn ofrece una suscripción premium que incluye funciones adicionales y soporte prioritario.",
  "¿Es Aislinn compatible con otros servicios?": "Sí, Aislinn se integra con una variedad de servicios y plataformas para mejorar la productividad y la automatización.",
  "¿Aislinn garantiza la privacidad de mis datos?": "Sí, la privacidad y seguridad de tus datos son una prioridad para Aislinn. Consulta nuestra política de privacidad para más detalles.",
  "¿Puedo colaborar en el desarrollo de Aislinn?": "Sí, Aislinn es un proyecto de código abierto. Puedes contribuir al desarrollo en nuestro repositorio en GitHub.",
  };

  chatToggle.addEventListener("click", function() {
    chatContainer.classList.toggle("open");
  });

  sendButton.addEventListener("click", function() {
    sendMessage(userInput.value.trim());
  });

  chatMessages.addEventListener("click", function(event) {
    if (event.target.classList.contains("predefined-message")) {
      const message = event.target.textContent;
      sendMessage(message);
    }
  });

  userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      sendMessage(userInput.value.trim());
    }
  });

  function sendMessage(message) {
    if (message !== "") {
      addMessage("user", message);
      const response = predefinedResponses[message];
      if (response) {
        setTimeout(() => addMessage("aislinn", response), 1000); // Tiempo de respuesta
      } else {
        setTimeout(() => addMessage("aislinn", "Lo siento, no puedo responder a esa pregunta en este momento."), 1000);
      }
      userInput.value = "";
    }
  }

  function addMessage(sender, text) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = text;
    if (sender === "aislinn") {
      messageElement.classList.add("predefined-message");
    }
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});