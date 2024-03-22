const totalCartas = 12;
const cartasDisponibles = ['A', 'K', 'Q', 'J'];
let cartas = [];
let cartasSeleccionadas = [];
let valoresUsados = [];
let movimientoActual = 0;
let intentosActuales = 0;
let gameTime = 60;
let timerElement = document.querySelector('#timer');

let plantillaCarta = '<div class="carta"><div class="reverso"></div><div class="cara"></div></div>';

function activar(e) {
   if (movimientoActual < 2) {
      
      if ((!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== e.target) && !e.target.classList.contains('activa') ) {
         e.target.classList.add('activa');
         cartasSeleccionadas.push(e.target);

         if (++movimientoActual == 2) {

            intentosActuales++;
            document.querySelector('#estadisticas').innerHTML = intentosActuales + ' esfuerzos';

            if (cartasSeleccionadas[0].querySelectorAll('.cara')[0].innerHTML == cartasSeleccionadas[1].querySelectorAll('.cara')[0].innerHTML) {
               cartasSeleccionadas = [];
               movimientoActual = 0;
               verificarJuegoCompleto();
            }
            else {
               setTimeout(() => {
                  cartasSeleccionadas[0].classList.remove('activa');
                  cartasSeleccionadas[1].classList.remove('activa');
                  cartasSeleccionadas = [];
                  movimientoActual = 0;
               }, 600);
            }
         }
      }
   }
}

function valorAleatorio() {
   let rnd = Math.floor(Math.random() * totalCartas * 0.5);
   let valores = valoresUsados.filter(valor => valor === rnd);
   if (valores.length < 2) {
      valoresUsados.push(rnd);
   }
   else {
      valorAleatorio();
   }
}

function obtenerValorCara(valor) {
   let rtn = valor;
   if (valor < cartasDisponibles.length) {
      rtn = cartasDisponibles[valor];
   }
   return rtn;
}

function star(){
   for (let i=0; i < totalCartas; i++) {
      let div = document.createElement('div');
      div.innerHTML = plantillaCarta;
      cartas.push(div);
      document.querySelector('#juego').append(cartas[i]);
      valorAleatorio();
      cartas[i].querySelectorAll('.cara')[0].innerHTML = obtenerValorCara(valoresUsados[i]);
      cartas[i].querySelectorAll('.carta')[0].addEventListener('click', activar);
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
star();
function verificarJuegoCompleto() {
  if (document.querySelectorAll('.carta:not(.activa)').length === 0) {
    mostrarPaginaFinal();
  }
}

function mostrarPaginaFinal() {
  let puntaje = intentosActuales;
  localStorage.setItem('puntaje', puntaje);
  window.location.href = 'final.html';
}