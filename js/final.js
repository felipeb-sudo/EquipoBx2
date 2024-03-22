document.getElementById('boton-reiniciar').addEventListener('click', function() {
  window.location.href = 'juego.html';
});

function mostrarPuntaje() {
  let puntaje = localStorage.getItem('puntaje');
  if (puntaje) {
      document.getElementById('valor-puntaje').textContent = puntaje;
  } else {
      document.getElementById('valor-puntaje').textContent = 'No se encontró puntaje';
  }
}

window.onload = function() {
  mostrarPuntaje();
};
