<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $hora = $_POST["hora"];
    $turno = $_POST["turno"];
    $cargo = $_POST["cargo"];
    $experiencia = $_POST["experiencia"];
    $motivacion = $_POST["motivacion"];

    $to = "elveralexalarconquicano@gmail.com";
    $subject = "Solicitud de moderador";
    $message = "Nombre: $nombre\n";
    $message .= "Email: $email\n";
    $message .= "Teléfono: $telefono\n";
    $message .= "Hora de disponibilidad: $hora\n";
    $message .= "Turno preferido: $turno\n";
    $message .= "Cargo: $cargo\n";
    $message .= "Experiencia previa: $experiencia\n";
    $message .= "Motivación para ser moderador:\n$motivacion\n";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>