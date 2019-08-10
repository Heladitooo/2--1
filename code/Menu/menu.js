var seleccionarJugador1 = document.querySelector("#seleccionarJugador1");
var seleccionarJugador2 = document.querySelector("#seleccionarJugador2");
var home = document.querySelector(".menu");
var camion1 = document.querySelector(".camion1");
var camion2 = document.querySelector(".camion2");
var instrucciones = document.querySelector("#Instrucciones");



var play = document.querySelector("#HoraDeJugar");
var jugadorTexto = document.querySelector("#jugadorTexto");


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

play.addEventListener("click",function()
{
  empezar = true;
  console.log(empezar)

  home.style.display = "none";
  camion1.style.display = "none";
  camion2.style.display = "none";


})
