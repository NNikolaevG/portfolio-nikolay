// Creo una constante de tipo array (listado) con los id de las secciones.
const misSecciones = ["proyectos", "lenguajes", "soft-skills", "contacto", "sobre-mi"]
console.log(misSecciones);


// Obtengo el alto de la ventana del navegador (sólo la una vez)
const alturaVentana = window.innerHeight;
console.log("alturaVentana = " + alturaVentana);


// Creo dos variables tipo array (lista) vacía. La 1º almacenará la distancia en Y de las secciones.
// La segunda va a obtener los textos de las secciones del HTML
var puntosDeActivacion = [];
var misSeccionesTxt = [];

//Bucle que recorre el array de las secciones
for (let i = 0; i < misSecciones.length; i++) {

  //relleno el array con el punto de activación
  puntosDeActivacion[i] = document.getElementById(misSecciones[i]).offsetTop - alturaVentana - 100;
  console.log(puntosDeActivacion[i]);
  //relleno el array con los textos de las secciones
  misSeccionesTxt[i] = document.getElementById(misSecciones[i]).innerText;

}

console.log(puntosDeActivacion);
console.log(misSeccionesTxt);


// Función que se ejecuta cada vez que hago scroll
function manejarOtroScroll() {

  // Obtengo la posición Y del scroll vertical
  const scrollActual = window.scrollY;
  console.log("scrollActual = " + scrollActual);


  //Bucle que recorre los puntos de activación creados
  for (let j = 0; j < puntosDeActivacion.length; j++) {


    //Si el scroll actual es mayor que el punto de activación...
    if (scrollActual > puntosDeActivacion[j]) {
      
      console.log("entro en el div con la seccion " + misSecciones[j])
      
      // Quito el opacity 0 por defecto (SEO)
      document.getElementById(misSecciones[j]).classList.remove("opacity-0");
   
      // Añado la clase generica de la animación
      document.getElementById(misSecciones[j]).classList.add("animacion-texto");
      
      // Añado la clase específica con el ancho del txt
      document.getElementById(misSecciones[j]).classList.add("long-" + misSecciones[j]);

      // Añado el texto a la sección
      document.getElementById(misSecciones[j]).innerHTML = "< " + misSeccionesTxt[j] + " >";
      
    }

  }


}






