
function distribucion(){
  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  $.ajax({
    url : "http://localhost:8080/distribucion",
    type : "GET",
    data: parametro,
    success : function(data) {

      console.log(data);

      elMes = $("#mes option:selected").text();
      titulo = "Temas mencionados en Twitter en " + elMes

            /*
            var attributes = [
               {"name": "Cultura y ocio", "hex": "#8F1B00"},
               {"name": "sector p�blico", "hex": "#C79660"},

               {"name": "Turismo", "hex": }
             ]

       "Industria" "Empleo" 	"Seguridad" "Hacienda" "Salud" "Comercio" 	"Educaci�n"  "Vivienda" "Ciencia y tecnolog�a" "Medio ambiente" "Econom�a" "Transporte" "Demograf�a" "Deporte" "Energ�a" 	"Urbanismo e infraestructuras" "Sector p�blico" "Legislaci�n y justicia" "Cultura y ocio" "Sociedad y bienestar" "Medio Rural"
      */

      link = "http://localhost:8080/descarga?anyo=" + parametro.anyo + "&mes=" + parametro.mes
      // instantiate d3plus
      $( "#grafico_distribucion" ).empty();
      var grafico = d3plus.viz()
        .container("#grafico_distribucion")  // container DIV to hold the visualization
        .data(data)  // data to use with the visualization
        .type("tree_map")   // visualization type
        .id("categoria")         // key for which our data is unique on
        .size("numTweets")      // sizing of blocks
        .format("es_ES")
        //.attrs(attributes)
        //.color("hex")
        .title(titulo)
        .title({
          "font": {"weight": "bold"},
          "total": true
        })
        .footer({
          "link": link,
          "value": "Descargar en formato CSV"
        })
        .draw()


    },
    error : function(data) {

      console.log(data);

    }
  });
}



$(document).ready(function(){
  distribucion()

  $('#anyo').on('change', function() {
    distribucion()
  })
  $('#mes').on('change', function() {
    distribucion()
  })
})
