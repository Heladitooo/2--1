

function Dvinci() {
  lienzo.clearRect(0, 0, canvas.width, canvas.height);
}

function dibujar(x,y,w,h,color) {
  lienzo.fillStyle = color;
  lienzo.fillRect(x,y,w,h);
}

function animacionEntradaOSalida(container,objeto,sOe)
{
   var containerAnimate = container.animate(
    [
      {
        opacity: "0",
        top: 0
      },
      {
        opacity: "1.0",
        top: 0,

      }
    ],
    {
      duration: 1000,
      iterations: 1,
      fill: "forwards",
      easing: 'ease-out'

    })
  var objetoAnimate = objeto.animate(
    [
      {
        opacity: "0",
        top: '-90px'
      },
      {
        opacity: "1.0",
        top: '0',
      }
    ],
    {
      duration: 1000,
      iterations: 1,
      fill: "forwards",
      easing: 'ease-out'

    })

  containerAnimate.pause()
  objetoAnimate.pause()

  if(sOe === 1)
  {
    containerAnimate.play()
    objetoAnimate.play()
  }else {
    containerAnimate = container.animate(
     [

       {
         opacity: "1.0",
         top: 0,

       },
       {
         opacity: "0",
         top: 0
       }
     ],
     {
       duration: 1000,
       iterations: 1,
       fill: "forwards",
       easing: 'ease-out'

     })
   objetoAnimate = objeto.animate(
     [

       {
         opacity: "1.0",
         top: '0',
       },
       {
         opacity: "0",
         top: '-90px'
       }
     ],
     {
       duration: 1000,
       iterations: 1,
       fill: "forwards",
       easing: 'ease-out'

     })
    containerAnimate.play()
    objetoAnimate.play()
  }
}

function loop()
{
  if(empezar == true && perder === false)
  {
  Dvinci();
  loopPersonajes();
  moverCamiones();
  colicionesCamiones()
  }
}



setInterval(loop, 10);
