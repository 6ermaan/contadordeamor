const fechaInicio = new Date(2025, 9, 28, 12, 0, 0);
// 28 de octubre 2025 (mes 9 porque enero = 0)

function actualizarContador() {
  const ahora = new Date();

  let anios = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  let dias = ahora.getDate() - fechaInicio.getDate();
  let horas = ahora.getHours() - fechaInicio.getHours();
  let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
  let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

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
    const diasMesAnterior = new Date(
      ahora.getFullYear(),
      ahora.getMonth(),
      0
    ).getDate();
    dias += diasMesAnterior;
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anios--;
  }

  const mesesTotales = anios * 12 + meses;

  document.getElementById('meses').textContent = mesesTotales;
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

  if (h >= 5 && h < 12) {
    msg = 'buenos días, pingüinita ☀️';
  } else if (h >= 12 && h < 18) {
    msg = 'espero que tu día esté siendo bonito 💗';
  } else if (h >= 18 && h < 22) {
    msg = 'las tardes contigo siempre son mejores ✨';
  } else {
    msg = 'si lees esto de noche, te amo muchhototote 🌙';
  }

  document.getElementById('mensajeHora').textContent = msg;
}

setInterval(actualizarContador, 1000);
actualizarContador();
mensajePorHora();
