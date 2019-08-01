
var camionY =
{
	ancho: 300,
	alto: 500
}

var camionPosXY = 100;
var camionPosXX = canvas.width + camionY.ancho;
var camionizquierda = false;
var camionDerecha = false;
var camionX0 = false;

var camionPosYY = canvas.height + camionY.alto;
var camionPosYX = 100;
var camionAbajo = false;
var camionArriva = true;
var camionY0 = false;


var aumentarVelocidadCamiones = 0;
var velocidadCamiones = 10;

function lolCamiones()
{
	camionPosYX = Math.ceil(Math.random() * canvas.width);
	camionPosXY = Math.ceil(Math.random() * canvas.height);
	var lol = Math.ceil(Math.random() * 6);
	aumentarVelocidadCamiones += 2;
	if(aumentarVelocidadCamiones === 40)
	{
		aumentarVelocidadCamiones = 0;
		velocidadCamiones +=5;
	}

	console.log(lol)

	if(lol == 5)
	{
		camionAbajo = false;
		camionArriva = false;
		camionDerecha = false;
		camionizquierda = false;
		camionY0 = true;
		camionX0 = false;
		camionPosYY = canvas.height + camionY.alto;

	}

	if(lol == 6)
	{
		camionAbajo = false;
		camionArriva = false;
		camionDerecha = false;
		camionizquierda = false;
		camionY0 = false;
		camionX0 = true;
		camionPosXX = canvas.width + camionY.alto;

	}

	if(lol == 1)
	{
		camionAbajo = false;
		camionArriva = true;
		camionDerecha = false;
		camionizquierda = false;
		camionY0 = false;
			camionX0 = false;
		camionPosYY = canvas.height + camionY.alto;

	}
	if(lol == 2){
		camionAbajo = true;
		camionArriva = false;
		camionDerecha = false;
		camionizquierda = false;
		camionY0 = false;
		camionX0 = false;
		camionPosYY = -canvas.height - camionY.alto;

	}

	if(lol  == 3)
	{
		camionizquierda = false;
		camionDerecha = true;
		camionAbajo = false;
		camionArriva = false;
		camionY0 = false;
		camionX0 = false;
		camionPosXX = canvas.width + camionY.alto;

	}
	if(lol == 4){
		camionizquierda = true;
		camionDerecha = false;
		camionAbajo = false;
		camionArriva = false;
		camionY0 = false;
		camionX0 = false;
		camionPosXX = -canvas.width - camionY.alto;

	}


}



function salirCamiones()
{

	function dibujarCamion(x,y)
	{
		lienzo.fillStyle = "#100f12";
		lienzo.fillRect(x,y,camionY.ancho,camionY.alto)
	}

	function dibujarCamionX(x,y)
	{
		lienzo.fillStyle = "#100f12";
		lienzo.fillRect(x,y,camionY.alto,camionY.ancho)
	}

	if(camionArriva == true)
	{

	if(camionPosYY <= -canvas.height - camionY.alto)
	{
		lolCamiones()
	}
	else{
		dibujarCamion(camionPosYX,camionPosYY-=velocidadCamiones)
	}
}

	if(camionY0 == true)
	{

	if(camionPosYY <= -canvas.height - camionY.alto)
	{
		lolCamiones()
	}
	else{
		dibujarCamion(0,camionPosYY-=velocidadCamiones)
	}
}

if(camionAbajo == true) {

	if(camionPosYY >= canvas.height + camionY.alto)
	{

		lolCamiones()
	}else {

		dibujarCamion(camionPosYX,camionPosYY+=velocidadCamiones)
	}
}


	if(camionDerecha == true)
	{

	if(camionPosXX <= -canvas.width - camionY.alto)
	{

		lolCamiones()
	}
	else{
		dibujarCamionX(camionPosXX-=velocidadCamiones,camionPosXY)
	}
}

	if(camionX0 == true)
	{

	if(camionPosXX <= -canvas.width - camionY.alto)
	{

		lolCamiones()
	}
	else{
		dibujarCamionX(camionPosXX-=velocidadCamiones,0)
	}
}

if(camionizquierda == true){

	if(camionPosXX >= canvas.width + camionY.alto)
	{

		lolCamiones()
	}else {

		dibujarCamionX(camionPosXX+=velocidadCamiones,camionPosXY)
	}


}


}
