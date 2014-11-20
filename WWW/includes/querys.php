<?php require_once('database.php');
session_start();
	$query = "SELECT * FROM `sitios` WHERE tipo = 'Bar'";
	$resultado = mysql_query($query) OR die("<p class='error'>Error de query: ".mysql_error()."</p></p>");
    while ( $row = mysql_fetch_array($resultado)){
    	echo "aqui hay bares";

    	//var elCentro = new google.maps.LatLng(3.40912,-76.58046);


	}

?>
