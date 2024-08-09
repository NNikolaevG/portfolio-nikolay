// Obtén el elemento div con la clase 'contenedor'

const misSecciones = ["proyectos","lenguajes","soft-skills","contacto"]


const contenedor = document.querySelector('.texto-animado');

// Función para manejar el evento de scroll
function manejarScroll() {
  // Obtiene la posición del scroll vertical
  const scrollPosition = window.scrollY;

  // Obtiene la posición del div en relación con la parte superior de la página
  const divPosition = contenedor.offsetTop;

  // Calcula la posición a la cual se activará la animación (puedes ajustar este valor según sea necesario)
  const activationPoint = divPosition - window.innerHeight + 100;

  // Verifica si la posición del scroll supera el punto de activación
  if (scrollPosition > activationPoint) {
    // Agrega la clase de animación al div
    
    document.getElementById("animacion-texto").innerHTML = "<  Lenguajes de programación  >";
    contenedor.classList.add('typing-demo');
  }
}

// Asocia la función manejarScroll al evento de scroll
window.addEventListener('scroll', manejarScroll);

// Llama a la función inicialmente para manejar el estado inicial de la página
manejarScroll();





/* Animacion "Mis Proyectos" */


// Obtén el elemento div con la clase 'otro-contenedor'
const otroContenedor = document.querySelector('.texto-animado2');

// Función para manejar el evento de scroll para el otro div
function manejarOtroScroll() {
  // Obtiene la posición del scroll vertical
  const scrollPosition = window.scrollY;

  // Obtiene la posición del div en relación con la parte superior de la página
  const divPosition = otroContenedor.offsetTop;

  // Calcula la posición a la cual se activará la otra animación
  const activationPoint = divPosition - window.innerHeight + 100;

  // Verifica si la posición del scroll supera el punto de activación para el otro div
  if (scrollPosition > activationPoint) {
    // Agrega la clase de otra animación al otro div
    
    document.getElementById("animacion-texto2").innerHTML = "< Mis Proyectos >";
    otroContenedor.classList.add('typing-demo2');
  }


}

// Asocia la función manejarOtroScroll al evento de scroll
window.addEventListener('scroll', manejarOtroScroll);

// Llama a la función inicialmente para manejar el estado inicial de la página para el otro div
manejarOtroScroll();









/* Animacion Soft Skills */



// Obtén el elemento div con la clase 'otro-contenedor'
const otroContenedor3 = document.querySelector('.texto-animado3');

// Función para manejar el evento de scroll para el otro div
function manejarOtroScroll3() {
  // Obtiene la posición del scroll vertical
  const scrollPosition = window.scrollY;

  // Obtiene la posición del div en relación con la parte superior de la página
  const divPosition = otroContenedor3.offsetTop;

  // Calcula la posición a la cual se activará la otra animación
  const activationPoint = divPosition - window.innerHeight + 100;

  // Verifica si la posición del scroll supera el punto de activación para el otro div
  if (scrollPosition > activationPoint) {
    // Agrega la clase de otra animación al otro div
    
    document.getElementById("animacion-texto3").innerHTML = "< Soft Skills >";
    otroContenedor3.classList.add('typing-demo3');
  }
}

// Asocia la función manejarOtroScroll al evento de scroll
window.addEventListener('scroll', manejarOtroScroll3);

// Llama a la función inicialmente para manejar el estado inicial de la página para el otro div
manejarOtroScroll3();







/* Animacion Contacta Conmigo */

// Obtén el elemento div con la clase 'otro-contenedor'

const otroContenedor4 = document.querySelector('.texto-animado4');

// Función para manejar el evento de scroll para el otro div
function manejarOtroScroll4() {
  // Obtiene la posición del scroll vertical
  const scrollPosition = window.scrollY;

  // Obtiene la posición del div en relación con la parte superior de la página
  const divPosition = otroContenedor4.offsetTop;

  // Calcula la posición a la cual se activará la otra animación
  const activationPoint = divPosition - window.innerHeight + 100;

  // Verifica si la posición del scroll supera el punto de activación para el otro div
  if (scrollPosition > activationPoint) {
    // Agrega la clase de otra animación al otro div
    
    document.getElementById("animacion-texto4").innerHTML = "< Contacta Conmigo >";
    otroContenedor4.classList.add('typing-demo4');
  }
}

// Asocia la función manejarOtroScroll al evento de scroll
window.addEventListener('scroll', manejarOtroScroll4);

// Llama a la función inicialmente para manejar el estado inicial de la página para el otro div
manejarOtroScroll4();



