document.getElementById('restart-button').addEventListener('click', function() {
    window.location.href = 'juego.html';
  });
  
  function showScore() {
    let score = localStorage.getItem('score');
    if (score) {
      document.getElementById('score-value').textContent = score;
    } else {
      document.getElementById('score-value').textContent = 'No se encontró puntaje';
    }
  }
  
  window.onload = function() {
    showScore();
  };
  
  