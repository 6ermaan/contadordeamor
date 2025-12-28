const fechaInicio = new Date('2025-10-28T12:00:00');


function actualizarContador() {
  const ahora = new Date();

  let años = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  let dias = ahora.getDate() - fechaInicio.getDate();

  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      0
    ).getDate();
    dias += mesAnterior;
  }

  if (meses < 0) {
    años--;
    meses += 12;
  }

  const diff = ahora - fechaInicio;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const segundos = Math.floor(diff / 1000) % 60;

  document.getElementById('meses').textContent = meses + años * 12;
  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}



function irCarta() {
window.location.href = 'carta.html';
}


function mensajePorHora() {
const h = new Date().getHours();
let msg = '';


if (h >= 5 && h < 12) msg = 'buenos días, pinguinita ☀️';
else if (h >= 12 && h < 18) msg = 'espero que tu día esté siendo bonito 💜';
else if (h >= 18 && h < 22) msg = 'las tardes contigo siempre son mejores ✨';
else msg = 'si lees esto de noche… estoy contigo 🌙';


document.getElementById('mensajeHora').textContent = msg;
}


setInterval(actualizarContador, 1000);
actualizarContador();
mensajePorHora();

