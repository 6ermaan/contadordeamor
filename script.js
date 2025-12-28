const inicioRelacion = new Date(2025, 9, 28, 0, 0, 0); 
// 28 de octubre 2025 (mes 9 porque enero = 0)

const mesesEl = document.getElementById("meses");
const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");
const mensajeEl = document.getElementById("mensaje");

function calcularTiempo() {
  const ahora = new Date();

  let anios = ahora.getFullYear() - inicioRelacion.getFullYear();
  let meses = ahora.getMonth() - inicioRelacion.getMonth();
  let dias = ahora.getDate() - inicioRelacion.getDate();
  let horas = ahora.getHours() - inicioRelacion.getHours();
  let minutos = ahora.getMinutes() - inicioRelacion.getMinutes();
  let segundos = ahora.getSeconds() - inicioRelacion.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const mesAnterior = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      0
    ).getDate();
    dias += mesAnterior;
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anios--;
  }

  const totalMeses = anios * 12 + meses;

  mesesEl.textContent = totalMeses;
  diasEl.textContent = dias;
  horasEl.textContent = horas;
  minutosEl.textContent = minutos;
  segundosEl.textContent = segundos;
}

function mensajePorHora() {
  const hora = new Date().getHours();
  let texto = "";

  if (hora >= 5 && hora < 12) {
    texto = "empezar el día contigo siempre es un regalo ✨";
  } else if (hora >= 12 && hora < 18) {
    texto = "las tardes contigo siempre son mejores ✨";
  } else if (hora >= 18 && hora < 22) {
    texto = "las noches contigo se sienten como hogar 🌙";
  } else {
    texto = "aunque sea tarde, pensar en ti nunca cansa 💜";
  }

  mensajeEl.textContent = texto;
}

calcularTiempo();
mensajePorHora();
setInterval(calcularTiempo, 1000);
