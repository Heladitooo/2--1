function Dvinci()
{
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight - 40;
  lienzo.clearRect(0,0,canvas.width,canvas.height)
}

function loop()
{
  Dvinci();
  mover();
  coliciones()
  salirCamiones();
}

setInterval(loop,100)
