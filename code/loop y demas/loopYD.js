

function Dvinci() {
  lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujar(x,y,w,h,color) {
  lienzo.fillStyle = color;
  lienzo.fillRect(x,y,w,h);
}

function loop()
{
  if(empezar == true)
  {
  Dvinci();
  loopPersonajes();
  moverCamiones();
  colicionesCamiones()
  }
}



setInterval(loop, 10);
