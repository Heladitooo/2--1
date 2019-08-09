function coliciones()
{
  //movXp1 = posicion en x del jugador 1
  //movYp1 = posicion en y del jugador 1

  //camionPosXY = posicion x de los camiones que van hacia arriva y abajo
  //camionPosYY = posicion Y de los camiones que van hacia arriva y abajo

  //camionPosXX = posicion x de los camiones que van hacia derecha y izquierda
  //camionPosYX = posicion Y de los camiones que van hacia derecha y izquierda

  if( movXp1  >= camionPosXY &&  movXp1 +  20 <= camionPosXY + camionY.ancho && movYp1  >=  camionPosYY && movYp1 + 20 <= camionPosYY + camionY.alto )
  {
    debugger
    console.log("Colicion!!!!")
  }

  


}
