<?php require_once('includes/database.php');
    
?>

<!DOCTYPE html>

  <html class="no-js"> 
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="css/bootstrap.min.css">
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/main.css">

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>

        <script>
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
</script>

        


    </head>
    <body>
        
        <div class="cabecera" class="col-xs-12">
           
        <div class="main-container">
            
            <section class="menu">            
                <div id="laImagen">
                    <img  id= "birra" class="icono" src="img/bar.png"  draggable="true" ondragstart="drag(event)"/>
                    <img  id= "comida" class="icono" src="img/comer.png" draggable="true" ondragstart="drag(event)"/>
                    <img  id= "cine" class="icono" src="img/cine.png" draggable="true" ondragstart="drag(event)"/>
                    <img  id= "tienda" class="icono" src="img/teatro.png" draggable="true" ondragstart="drag(event)"/>
                </div>

                
            </section>
            <section class="divMapa"> 
                 <div id="map-canvas"></div>
                <canvas id="lienzo" width="162" height="254" ondrop="drop(event)" ondragover="allowDrop(event)">
                   
                </canvas>

               
            </section>
             <!-- #main -->
        </div> <!-- #main-container -->

        <div class="footer-container">
            <footer id="elFooter" class="wrapper">
                <h4>Maria Alejandra Moreno</h4>
            </footer>
        </div>

        

        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>

        <script src="js/plugins.js"></script>
        

        <script type="text/javascript">

            function initialize() {
                var elCentro = new google.maps.LatLng(3.40912,-76.58046);
                var mapOptions = {
                zoom: 4,
                center: elCentro
              };
                var map = new google.maps.Map(document.getElementById('map-canvas'),
                  mapOptions);
           
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        

        </script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>

        <script src="js/vendor/bootstrap.min.js"></script>

        <script src="js/main.js"></script>
    </body>
</html>