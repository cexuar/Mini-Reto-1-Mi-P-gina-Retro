// Función para cambiar a modo oscuro
$(document).ready(function() {
    var btn = $("#modooscuro-btn");
    btn.click(function() {
      $("#mensaje").html("Welcome Back, Batman!");
      $("body").css("background-color", "black");
      $("body").css("color", "white");
    });
  });
  
// Función para hacer la petición AJAX
function cargarDatos() {
  // Hacemos la petición al servidor
  $.ajax({
    url: "data.txt",
    success: function(data) {
      $('#resultado').text(data);
    },
    error: function() {
      $('#resultado').text('Hubo un error al cargar los datos');
    }
  });
}
  
  
// Evento click para el botón "cargar-btn"
$('#cargar-btn').on('click', function() {
  cargarDatos();
});
