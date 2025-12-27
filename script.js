const fechaInicio = new Date('2025-10-28T00:00:00');


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


setInterval(actualizarContador, 1000);
actualizarContador();