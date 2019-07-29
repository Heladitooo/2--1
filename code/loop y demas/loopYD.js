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
}

setInterval(loop,10)
