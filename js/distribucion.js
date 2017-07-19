
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
         {"name": "sector público", "hex": "#C79660"},

         {"name": "Turismo", "hex": }
       ]

 "Industria" "Empleo" 	"Seguridad" "Hacienda" "Salud" "Comercio" 	"Educación"  "Vivienda" "Ciencia y tecnología" "Medio ambiente" "Economía" "Transporte" "Demografía" "Deporte" "Energía" 	"Urbanismo e infraestructuras" "Sector público" "Legislación y justicia" "Cultura y ocio" "Sociedad y bienestar" "Medio Rural"
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

      /*
      $( "#tabla_distribucion" ).empty();
      var tabla = d3plus.viz()
        .container("#tabla_distribucion")
        .data(data)
        .type("table")
        .id("categoria")
        .shape("square")
        .cols(["numTweets", "porTweets"])
        .draw()
      */


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
