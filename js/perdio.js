document.getElementById('boton-reiniciar').addEventListener('click', function() {
    window.location.href = 'juego.html';
  });
  
let paresEncontrados = 0;

function mostrarResultado() {
    let puntaje = paresEncontrados * 10;
    document.getElementById("puntaje").innerHTML = puntaje;
  }
  