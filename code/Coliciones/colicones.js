
function coliciones(a,b)
{

  if( a.posX + a.ancho >= b.posX + 1 &&
    a.posX <= b.posX + b.ancho - 1 &&
    a.posY + a.alto >= b.posY + 1 &&
    a.posY <= b.posY + b.alto - 1)
  {
    a.colicion = true;
  }

}

function colicionesCamiones()
{
  coliciones(p1,camionVertical)
  coliciones(p1,camionHorizontal)

  coliciones(p2,camionVertical)
  coliciones(p2,camionHorizontal)
}
