const contenedor = document.getElementById('contenedor');
const boton = document.getElementById('generar');
const input = document.getElementById('frase');

function generarGatoConFrase() {
  const texto = input.value.trim();
  if (!texto) return;
  const url = `https://cataas.com/cat/says/${encodeURIComponent(texto)}?size=50&color=white`;
  contenedor.innerHTML = `<img src="${url}" alt="Gato con frase" />`;
}

boton.addEventListener('click', generarGatoConFrase);
