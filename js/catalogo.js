
function catalogo(){

  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  $.ajax({
    url : "http://localhost:8080/catalogo",
    type : "GET",
    data: parametro,
    success : function(data) {

      console.log(data);



      elMes = $("#mes option:selected").text();
      titulo = "Número de catálogos de datos en " + elMes

      $( "#portal_transparencia" ).empty();
      var grafico = d3plus.viz()
        .container("#portal_transparencia")  // container DIV to hold the visualization
        .data(data)  // data to use with the visualization
        .type("tree_map")   // visualization type
        .id("categoria")         // key for which our data is unique on
        .size("numDatasets")      // sizing of blocks
        //.aggs({"numDatasets": "mean"})
        .format("es_ES")
        .title(titulo)
        .title({
          "font": {"weight": "bold"},
          "total": true
        })
        .draw()


    },
    error : function(data) {

      console.log(data);

    }
  });
}



$(document).ready(function(){
  catalogo()


  $('#anyo').on('change', function() {
    catalogo()
  })
  $('#mes').on('change', function() {
    catalogo()
  })
})
