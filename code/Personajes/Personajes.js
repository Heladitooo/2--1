
var p1 = {
  posX: 30,
  posY: 30,
  ancho: 20,
  alto: 20,
  velocidad: 10,
  arriva:87,
  abajo: 83,
  izquierda:65,
  derecha:68,
  color:"#405d88"
}

var p2 = {
  posX: 30,
  posY: 30,
  ancho: 20,
  alto: 20,
  velocidad: 10,
  arriva:38,
  abajo: 40,
  izquierda:37,
  derecha:39,
  color:"#7d4040"
}

var teclasEstado = {};

function Dvinci() {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight - 40;

  lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

function MovimientoP() {
  document.addEventListener("keydown", function(ev) {
    teclasEstado[ev.keyCode || ev.which] = true;
  });
  document.addEventListener("keyup", function(ev) {
    teclasEstado[ev.keyCode || ev.which] = false;
  });
}

 function moverPersonaje(player) {

   function dP() {
     lienzo.fillStyle = player.color;
     lienzo.fillRect(player.posX,player.posY, player.ancho, player.alto);
   }
   dP();

  if (
    player.posX <= canvas.width - player.ancho &&
    player.posY <= canvas.height - player.alto &&
    player.posX >= 0 + player.ancho/2 &&
    player.posY >= 0 + player.alto/2
  ) {
    if (teclasEstado[player.arriva]) {
      player.posY -= player.velocidad;
    }
    if (teclasEstado[player.izquierda]) {
      player.posX -= player.velocidad;
    }
    if (teclasEstado[player.abajo]) {
      player.posY += player.velocidad;
    }
    if (teclasEstado[player.derecha]) {
      player.posX += player.velocidad;
    }
  } else {
    if (player.posX >= canvas.width - player.ancho) {
      player.posX -= player.velocidad;
    }
    if (player.posY >= canvas.height - player.alto) {
      player.posY -= player.velocidad;
    }
    if (player.posX <= 0 + player.ancho/2) {
      player.posX += player.velocidad;
    }
    if (player.posY <= 0 + player.alto/2) {
      player.posY += player.velocidad;
    }
  }
}

function loopPersonajes()
{
  moverPersonaje(p2);

  moverPersonaje(p1);

}

MovimientoP();
