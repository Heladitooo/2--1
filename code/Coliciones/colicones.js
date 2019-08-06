function coliciones()
{
  if( movXp1  >= camionPosXY &&  movXp1 +  20 <= camionPosXY + camionY.ancho && movYp1  >=  camionPosYY && movYp1 + 20 <= camionPosYY + camionY.alto )
  {
    debugger
    console.log("Colicion!!!!")
  }

  if( movXp1>= camionPosXX &&  movXp1  + 20 <= camionPosXX + camionY.ancho && movYp1  >=  camionPosYX && movYp1 + 20 <= camionPosYX + camionY.alto)
  {
    debugger
    console.log("Colicion!!!!")
  }


}
