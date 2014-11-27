
//crea el canvas en el id cuadrado

      function init() {

        var canvas = document.getElementById("cuadrado");
        var context = canvas.getContext("2d");

        context.lineWidth = 2;
      }

//DRAG
      var pos;

      function allowDrop(ev) {
        ev.preventDefault();
      }
      function get_pos(ev){
       pos = [ev.pageX, ev.pageY];
      }
      function drag(ev) {
        ev.dataTransfer.setData("Text",ev.target.id);

      }


///FUNCION CUANDO SE HACE EL DROP
      function drop(ev) {
 
        ev.preventDefault();

        var offset = ev.dataTransfer.getData("text/plain").split(',');
        var data=ev.dataTransfer.getData("Text");

        var img = canvas = document.getElementById(data);

        var dx = pos[0] - img.offsetLeft;
        var dy = pos[1] - img.offsetTop;


        
//PINTA LA IMAGEN
        document.getElementById("cuadrado").getContext("2d").drawImage(document.getElementById(data), 85,  40);


///LE DA AL CrearDatos EL ID DE LA IMAGEN
        crearDatos(data);

        //context.clearRect(0, 0, canvas.width, canvas.height);


}


//VARIABLES DE LATITUD Y LONGITUD PARA EL MAPA

var lat= "";
var Long="";


///PARA TOMAR LOS DATOS DE LA BASE DE DATOS DANDOLE EL ID
function crearDatos(str) {

//REQUEST
  var req;


  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    req=new XMLHttpRequest();
     } else { // code for IE6, IE5
      req=new ActiveXObject("Microsoft.XMLHTTP");
    }

   //LO ABRE DANDOLE EL TIPO POR EL URL Y LO ENVIA
    req.open("JSON","getdata.php?tipo="+str,true);
    req.send();

    req.onreadystatechange=function() {

      if (req.readyState==4 && req.status==200) {

       // document.getElementById("txtHint").innerHTML=req.responseText;

       //SE LE ASIGNA LOS DATOS QUE LLEGAN A UNA VARIABLE
        var result = req.responseText;
        //SE HACE STRINGIFY PARA VOLVER STRING LO QUE LLEGA (LAT,LONG)
        var jsonString =JSON.stringify(result);

      //LATITUD Y LONGITUD SE REINICIAN CADA VEZ QUE LLEGAN LOS DATOS POR AJAX
       lat = "";
       Long="";

       //SE DIVIDE PARTE POR PARTE EL STRING PARA SEPARAR EL LAT DEL LONG YA QUE LLEGAN JUNTAS
       var resulto = $.parseJSON(jsonString);
       var tempX;

       //SE HACE UN FOR QUE LLENA LAT SI LO QUE LLEGA DEL PARSE ES UN NUMERO, "." o "-" 


       for(var x=0; x<resulto.length; x++){

        if(resulto[x] == '0' ||resulto[x]== '1' ||resulto[x]== '2'|| resulto[x]=='3' ||resulto[x]=='4' ||resulto[x]=='5' ||resulto[x]=='6' ||resulto[x]=='7'||resulto[x]=='8'||resulto[x]=='9'||resulto[x]=='.' || resulto[x]=='-'){

         lat = lat + resulto[x];
       }

       //SI ES UNA "," DEJA DE ADICIONARLE NUMEROS A LA VARIABLE

       if(resulto[x] == ','){
        tempX = x+1;
        break;     
      }

    }

    // SE HACE UN FOR PARA ADICIONARLE LOS NUMEROS QUE SOMBRAN AL LONG

    for(var x=tempX; x<resulto.length; x++){

      if(resulto[x] == '0' ||resulto[x]== '1' ||resulto[x]== '2'|| resulto[x]=='3' ||resulto[x]=='4' ||resulto[x]=='5' ||resulto[x]=='6' ||resulto[x]=='7'||resulto[x]=='8'||resulto[x]=='9'||resulto[x]=='.' || resulto[x]=='-'){

       Long = Long + resulto[x];
     }
  }

  
  //SE VUELVE A CARGAR EL MAPA

  initialize();

      }

    }

 }


        /////MAPA COORDENADAS TOMA EL CENTRO Y HACE LOS MARCADORES DE LOS SITIOS

        function initialize() {


          var elCentro = new google.maps.LatLng(lat,Long);

          var mapOptions = {
            zoom: 20,
            center: elCentro
          };
          var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

                ///TOMA LA LATITUD Y LONGITUD DE LA BASE DE DATOS Y LA MARCA

                var marker = new google.maps.Marker({
                 position: new google.maps.LatLng(lat,Long),
                 map: map,
                 animation: google.maps.Animation.DROP,
                 title: "Sitios"
               });

              }

        //CARGA EL MAPA
              google.maps.event.addDomListener(window, 'load', initialize);

