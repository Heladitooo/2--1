
var seleccionarJugador1 = document.querySelector("#seleccionarJugador1");
var seleccionarJugador2 = document.querySelector("#seleccionarJugador2");
var homeContainer = document.querySelector(".menuContainer");
var home = document.querySelector(".menu");
var camion1 = document.querySelector(".camion1");
var camion2 = document.querySelector(".camion2");
var instrucciones = document.querySelector("#Instrucciones");
var play = document.querySelector("#HoraDeJugar");
var jugadorTexto = document.querySelector("#jugadorTexto");

animacionEntradaOSalida(homeContainer,home,1)

instrucciones.addEventListener("click",function()
{
  alert("Evita los camiones!  \np1: w,a,s,d\np2: arriva,abajo,izquierda,derecha\nJUEGO EN DESARROLLO! ya le agregaremos mas cosas")
})

seleccionarJugador1.addEventListener("click",function()
{
  jugadorTexto.innerHTML = "1 jugador";
  p2.vasAjugar = false;
})
seleccionarJugador2.addEventListener("click",function()
{
    jugadorTexto.innerHTML = "2 jugadores";
    p2.vasAjugar = true;

})

//Pulsar boton jugar
play.addEventListener("click",function()
{
  empezar = true;
  console.log(empezar)

  animacionEntradaOSalida(homeContainer,home,0)
  camion1.style.display = "none";
  camion2.style.display = "none";

  if(p2.vasAjugar === false)
  {
    puntajeContainer.style.gridTemplateColumns = "1fr";
    puntajeP2.style.display = "none"
  } else {
    puntajeContainer.style.gridTemplateColumns = "repeat(2,1fr)";
  }
})

//Carga otra vez el juego
VolverAempezar.addEventListener("click",function()
{
  location.reload()
})
