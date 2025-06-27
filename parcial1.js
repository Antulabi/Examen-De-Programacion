/*
parcial de programacion
Escrito por Charlone Nahuel y Sanchez Christian
*/

let jugadores = []; // Inicializamos el arreglo para los jugadores.
let cantidadJugadores = 10; // cambiando el valor, se ajusta la cantidad de jugadores.
let cantidadTiradas = 5; // Cambiando el valor se ajusta la cantidad de tiradas.
let dado = 0; // inicializamos a 0 dado
let puntajeMaximo = 0; // Inicializamos el puntaje ganador
let ganador = 0; // inicializamos el Mejor jugador
crearJugadores(); // Cargamos los jugadores
tirarDados(); // llamamos el juego

// Tiramos Dados
function tirarDados() {
  // para cada jugador vamos a realizar las tiradas
  for (let jugador = 0; jugador < cantidadJugadores; jugador++) {
    for (let tirada = 1; tirada <= cantidadTiradas; tirada++) {
      // Realizamos 5 tiradas
      tirarDado();
      jugadores[jugador] = jugadores[jugador] + dado; // Se acumula el puntaje cada tirada del dado
    }
    console.log(
      "El puntaje del jugador " + jugador + " es : " + jugadores[jugador]
    );
    // Despues de que cada jugador termina su turno se actualiza el ganador
    if (jugadores[jugador] > puntajeMaximo) {
      ganador = jugador;
      puntajeMaximo = jugadores[jugador];
    }
  }
  // Mostramos al ganador
  console.log(
    "El ganador es el jugador: " +
      ganador +
      " con un puntaje de: " +
      puntajeMaximo
  );
}
function tirarDado() {
  dado = Math.floor(Math.random() * 6) + 1; // 6 representa la cantidad de caras del dado.
}

function crearJugadores() {
  for (let i = 0; i < cantidadJugadores; i++) {
    jugadores[i] = 0;
  }
}
