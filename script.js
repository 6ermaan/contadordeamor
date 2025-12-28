const fechaInicio = new Date(2025, 9, 28, 0, 0, 0);
// 28 de octubre 2025 a las 00:00

function actualizarContador() {
  const ahora = new Date();

  // calcular meses completos
  let meses =
    (ahora.getFullYear() - fechaInicio.getFullYear()) * 12 +
    (ahora.getMonth() - fechaInicio.getMonth());

  // si aún no llega al 28 a las 00:00 de este mes, restar uno
  const aniversarioEsteMes = new Date(
    ahora.getFullYear(),
    ahora.getMonth(),
    28,
    0,
    0,
    0
  );

  if (ahora < aniversarioEsteMes) {
    meses--;
  }

  // último aniversario real
  const ultimoAniversario = new Date(fechaInicio);
  ultimoAniversario.setMonth(fechaInicio.getMonth() + meses);

  // diferencia desde el último 28
  let diff = ahora - ultimoAniversario;

  const segundos = Math.floor(diff / 1000) % 60;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

  document.getElementById('meses').textContent = Math.max(meses, 0);
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
