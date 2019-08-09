
var canvas = document.querySelector("#espacio");
var lienzo = canvas.getContext("2d");

function Dvinci() {
  lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  Dvinci();
  loopPersonajes();
  console.log(p1)
  console.log(p2)

}

setInterval(loop, 10);
