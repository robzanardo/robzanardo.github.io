var divCont = null;
var imgPaths = null;
var ships = null;
var imgObj = null;
var animate;
	
function init(){
	divCont = document.getElementById('ships');
	
	ships = [document.getElementById('ship1'), document.getElementById('ship2'), document.getElementById('ship3'), document.getElementById('ship4'), document.getElementById('ship5');
	
	imgObj = ships[0];
	imgObj.src = "/assets/img/ship2.png"
	imgObj.style.position= 'relative'; 
	imgObj.style.left = '0px'; 
	moveRight();
}
	
function moveRight(){
	imgObj.style.left = parseInt(imgObj.style.left) + 2 + 'px';
	animate = setTimeout(moveRight,8); // call moveRight in 8msec
}

