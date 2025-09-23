// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // trim para limpiar espacios en blanco

  // Validar la entrada
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos
  amigos.push(nombre);

  // Limpiar el campo de entrada
  input.value = "";
  // Actualizar la lista en pantalla
  actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");
  // Limpiar la lista existente
  lista.innerHTML = "";
  // Iterar sobre el arreglo y agregar elementos
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
