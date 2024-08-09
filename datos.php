<?php

echo "<h1>Datos del formulario: " . $_POST["campo-oculto"] . "</h1>";

echo "<h3>Nombre: " . $_POST["nombre"] . "</h3>";
echo "<h3>Apellidos: " . $_POST["apellidos"] . "</h3>";
echo "<h3>Email: " . $_POST["email"] . "</h3>";
echo "<h3>Mensaje: " . $_POST["mensaje"] . "</h3>";
echo "<h3>Motivo de contacto: " . $_POST["contratacion"] . " " . $_POST["colaboracion"] . " " . $_POST["informacion"] . "</h3>";



?>