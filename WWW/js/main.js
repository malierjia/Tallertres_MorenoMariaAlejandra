jQuery(document).ready(function(){
	console.log("Ya cargó");
	
	origen = document.getElementById('laImagen');
	canvas = document.getElementById('lienzo');
	lienzo = canvas.getContext('2d');

	origen.addEventListener('dragstart', arrastrar, false);
	origen.addEventListener('dragend', finalizar, false);

	

	canvas.addEventListener('dragenter',entrarLienzo, false);
	canvas.addEventListener('dragover', sobreLienzo, false);
	canvas.addEventListener('dragleave',salirLienzo, false);
	canvas.addEventListener('drop',soltarLienzo, false);

	

	function arrastrar(event) {
		var elemento = "<img src='"+origen.getAttribute('src')+"' width='"+origen.getAttribute('width')+"' heigth='"+origen.getAttribute('heigth')+"' />";
		event.dataTransfer.setData('Text',elemento);
		var elId = event.target.getAttribute('id');
		event.dataTransfer.setData('Text',elId);
		event.dataTransfer.setDragImage(event.target,0,0);
		console.log(elId);
	};

	/*
	si el id obtenido es cerveza, cuando lo suelte voy a select * from tales y así
	la idea es sacar las birras de ahí
	*/
	function entrarLienzo(event) {
		event.preventDefault();
		//canvas.style.backgroundImage = 'url("../img/overtarget.png")';
		console.log("Aquí me pueden soltar");
	};

	function salirLienzo(event) {
		event.preventDefault();
		//canvas.style.backgroundImage = 'url("../img/overtarget.png")';
		console.log("Se salio del area viejito");
	};

	
	function soltarLienzo(event) {
		event.preventDefault();
		var elId = event.dataTransfer.getData('Text');
		var laImagen = document.getElementById(elId);

		posX = event.pageX - canvas.offsetLeft;
		posY = event.pageY - canvas.offsetTop;
		w = laImagen.getAttribute('width');
		h = laImagen.getAttribute('height');

		lienzo.drawImage(laImagen,posX,posY,w,h);
	};

	function finalizar(event) {
		var elOrigen = event.target;
		//elOrigen.style.visibility = 'hidden';
		console.log("acabas de soltar el elemento");

		//$(".cabecera").load("includes/querys.php");

	}
	

});
