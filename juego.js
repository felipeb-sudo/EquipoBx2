let totalCartas = 12;
let card = [];
let selectedcard = [];
let valor = [];
let movimiento = 0;
let intentos = 0;
let letra = ['A', 'K', 'Q', 'J'];
let gameTime = 60;
let timerElement = document.querySelector('#timer');

function activate(e) {
  if (movimiento < 2) {
    e.target.classList.add('active');
    if (selectedcard[0] || selectedcard[0] !== e.target) {
      selectedcard.push(e.target);
      if (++movimiento == 2) {
        if (intentos < 3) {
          intentos++;
          document.querySelector('#stats').innerHTML = intentos + ' intentos';

          if (selectedcard[0].querySelectorAll('.face')[0].innerHTML == selectedcard[1].querySelectorAll('.face')[0].innerHTML) {
            selectedcard = [];
            movimiento = 0;
          } else {
            setTimeout(() => {
              selectedcard[0].classList.remove('active');
              selectedcard[1].classList.remove('active');
              selectedcard = [];
              movimiento = 0;
            }, 600);
          }
        } else {
          alert("Ya no tiene mas intentos" + intentos);
        }
      }
    }
  }
}

function random() {
  let nn = Math.floor(Math.random() * totalCartas * 0.5);
  let valor = valuesUsed.filter(value => value === nn);
  if (valor.length < 2) {
    valuesUsed.push(nn);
  } else {
    randomValue();
  }
}

function car(value) {
  let n = value;
  if (value < availableCards.length) {
    n = availableCards[value];
  }
  return n;
}

function startGame() {
  for (let i = 0; i < totalCartas; i++) {
    let div = document.createElement('div');
    div.classList.add('card');

    let back = document.createElement('div');
    back.classList.add('back');
    div.appendChild(back);

    let face = document.createElement('div');
    face.classList.add('face');
    div.appendChild(face);

    card.push(div);
    document.querySelector('#game').append(card[i]);
    randomValue();
    card[i].querySelectorAll('.face')[0].innerHTML = car(valuesUsed[i]);
    card[i].addEventListener('click', activate);
  }

  let intervalId = setInterval(() => {
    gameTime--;
    timerElement.textContent = gameTime + ' seconds';
    if (gameTime === 0) {
      clearInterval(intervalId);
      alert("Se acabó el tiempo!");
    }
  }, 1000);
}
startGame();
