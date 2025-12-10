const contenedor = document.getElementById('contenedor');
const boton = document.getElementById('nuevoGato');

function cargarGato() {
  contenedor.innerHTML = `<img src="https://cataas.com/cat?${Date.now()}" alt="Gato aleatorio" />`;
}

boton.addEventListener('click', cargarGato);
window.addEventListener('load', cargarGato);
