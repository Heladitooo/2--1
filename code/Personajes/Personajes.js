


var p1 = {
  posX: 60,
  posY: 30,
  ancho: 20,
  alto: 20,
  velocidad: 10,
  arriva:87,
  abajo: 83,
  izquierda:65,
  derecha:68,
  color:"#405d88",
  colicion: false,
  puntaje: 0
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
  color:"#7d4040",
  colicion: false,
  vasAjugar: false,
  puntaje: 0
}

var teclasEstado = {};


function MovimientoP() {
  document.addEventListener("keydown", function(ev) {
    teclasEstado[ev.keyCode || ev.which] = true;
  });
  document.addEventListener("keyup", function(ev) {
    teclasEstado[ev.keyCode || ev.which] = false;
  });
}

 function moverPersonaje(player) {

  if(player.colicion === false)
  {
  dibujar(player.posX,player.posY,player.ancho,player.alto,player.color);
  }

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
  if(p2.colicion === false && p2.vasAjugar === true)
  {
    moverPersonaje(p2);
  }

  if(p1.colicion === false)
  {
    moverPersonaje(p1);
  }


}

MovimientoP();
