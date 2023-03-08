const boton= document.getElementById("btn")
btn.addEventListener("click", preguntarNombre )
const h1= document.getElementById("h1")
const h2= document.getElementById("h2")

function preguntarNombre() {
  const nombre = prompt ("introduce tu nombre")
 mostrarNombre(nombre)
}

function mostrarNombre(nombre) {
   h1.textContent = "hola uwu"
  h2.textContent= nombre
}