<?php

include_once("includes/database.php");

//VARIABLES

$lat="";
$Long="";



$tipo=$_GET['tipo'];


//QUERY DESCRITO EN DOCUMENTACION
$sql="SELECT `lat`, `long` FROM tallerlugares.lugares WHERE tallerlugares.lugares.tipo = '$tipo'";
$result = mysqli_query($con,$sql);



while($row = mysqli_fetch_array($result)) {

$resultados[] = array($row['lat'], $row['long']);

  $lat=$row['lat'];
  $Long=$row['long'];

//ENVIA LAS VARIABLES LATITUD Y LONG DE LA BASE DE DATOS
  echo "$lat , $Long ";

}

mysqli_close($con);


?>