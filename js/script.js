let temp=false;

function actionMenu() {
    if (temp == false) {
        openNav();
        temp = true;
    } else {
        closeNav();
        temp = false;
    }
}

function openNav() {
    document.getElementById('navbar').style.display = 'block';
}

function closeNav() {
    document.getElementById('navbar').style.display = 'none';
}



 new ScrollMenu(['.navbar-brand', '.navbar-nav a']);

 $(document).ready(function(){
			$(window).scroll(function() {
			$(".slideanim").each(function(){
			var pos = $(this).offset().top;
			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
			$(this).addClass("slide");
			}
			});
			});
			})


     
            // Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: -13.6645039, lng: -73.3497833};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

function obtenerDatos() {
var dni=document.getElementById("dni").value;

  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    document.getElementById("nombres").value = myObj.nombres;
    document.getElementById("apellidoPaterno").value = myObj.apellidoPaterno;
    document.getElementById("apellidoMaterno").value = myObj.apellidoMaterno;
  }
};
xmlhttp.open("GET", "consultarDatos.php?dni="+dni, true);
xmlhttp.send();
}