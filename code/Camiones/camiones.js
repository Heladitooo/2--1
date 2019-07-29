var camionesMovimiento = 100;

function salirCamiones()
{
  var lol = Math.ceil(Math.random() * 8)
  console.log(lol)

  if(lol == 1)
  {
    console.log(":)")
    lienzo.fillRect(100,camionesMovimiento--,400,700);
  }
}
setInterval(salirCamiones,1000)
