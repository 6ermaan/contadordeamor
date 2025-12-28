const fechaInicio = new Date('2025-10-28T12:00:00');


function actualizarContador() {
const ahora = new Date();
let diff = ahora - fechaInicio;


const segundos = Math.floor(diff / 1000) % 60;
const minutos = Math.floor(diff / (1000 * 60)) % 60;
const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
const diasTotales = Math.floor(diff / (1000 * 60 * 60 * 24));
const meses = Math.floor(diasTotales / 30);
const dias = diasTotales % 30;


document.getElementById('meses').textContent = meses;
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
