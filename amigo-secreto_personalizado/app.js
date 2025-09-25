let amigos = [];
let ultimoSorteado = null;

function agregarAmigo() {
  const input = document.getElementById("amigo");
  // Normalizar espacios internos y convertir a minúsculas
  let nombre = input.value.trim().replace(/\s+/g, " ");
  let nombreNormalizado = nombre.toLowerCase();
  // Oculta el resultado anterior
  document.getElementById("resultado").innerHTML = "";
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }
  // Validar duplicados ignorando mayúsculas y espacios
  const nombresNormalizados = amigos.map((a) =>
    a.trim().replace(/\s+/g, " ").toLowerCase()
  );
  if (nombresNormalizados.includes(nombreNormalizado)) {
    alert("Ese nombre ya fue ingresado.");
    return;
  }
  amigos.push(nombre);
  input.value = "";
  actualizarListaAmigos();
  reproducirAgregarAmigo();
}

// Reproducir sonido al agregar amigo
function reproducirAgregarAmigo() {
  const audio = document.getElementById("agregar-audio");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function actualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 1) {
    alert("Solo queda un nombre en la lista. No se puede realizar el sorteo.");
    return;
  }
  if (amigos.length < 2) {
    alert("Debes ingresar al menos 2 nombres antes de sortear.");
    return;
  }
  let nombreSorteado = null;
  let intentos = 0;
  do {
    const indice = Math.floor(Math.random() * amigos.length);
    nombreSorteado = amigos[indice];
    intentos++;
  } while (nombreSorteado === ultimoSorteado && intentos < 10);
  ultimoSorteado = nombreSorteado;
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${nombreSorteado}</li>`;
  document.getElementById("listaAmigos").innerHTML = "";
  lanzarConfeti();
  reproducirCelebracion();
}

// Reproducir sonido de celebración
function reproducirCelebracion() {
  const audio = document.getElementById("celebracion-audio");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}
// Animación de confeti
function lanzarConfeti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    // Alternar entre ambos lados
    const side = i % 2 === 0 ? "left" : "right";
    if (side === "left") {
      confetti.style.left = Math.random() * 30 + "vw";
    } else {
      confetti.style.left = 70 + Math.random() * 30 + "vw";
    }
    confetti.style.backgroundColor = [
      "#f67280",
      "#48c9b0",
      "#5dade2",
      "#ffe5d9",
      "#b7a69e",
      "#566573",
    ][Math.floor(Math.random() * 6)];
    confetti.style.animationDelay = Math.random() * 1 + "s";
    confettiContainer.appendChild(confetti);
  }
  setTimeout(() => {
    confettiContainer.innerHTML = "";
  }, 2200);
}
