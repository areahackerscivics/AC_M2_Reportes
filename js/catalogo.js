
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

      var attributes = [
         {"categoria": "turismo", "hex": "#BF1E2E"},
         {"categoria": "industria", "hex": "#EF4136"},
         {"categoria": "empleo", "hex": "#F25A29"},
         {"categoria": "seguridad", "hex": "#F8931F"},
         {"categoria": "hacienda", "hex": "#FCB042"},
         {"categoria": "salud", "hex": "#F9EE34"},
         {"categoria": "comercio", "hex": "#F9EE34"},
         {"categoria": "educacion", "hex": "#D8DE24"},
         {"categoria": "vivienda", "hex": "#8DC641"},
         {"categoria": "ciencia tecnologia", "hex": "#272262"},
         {"categoria": "medio ambiente", "hex": "#2B3991"},
         {"categoria": "economia", "hex": "#29AAE3"},
         {"categoria": "transporte", "hex": "#01A79D"},
         {"categoria": "demografia", "hex": "#2BB673"},
         {"categoria": "deporte", "hex": "#016738"},
         {"categoria": "energia", "hex": "#009345"},
         {"categoria": "urbanismo infraestructuras", "hex": "#3AB54B"},
         {"categoria": "sector publico", "hex": "#672D93"},
         {"categoria": "legislacion justicia", "hex": "#92278F"},
         {"categoria": "cultura ocio", "hex": "#9E1F64"},
         {"categoria": "sociedad bienestar", "hex": "#DA1C5C"},
         {"categoria": "medio rural", "hex": "#9B8578"}
       ]

      $( "#portal_transparencia" ).empty();
      var grafico = d3plus.viz()
        .container("#portal_transparencia")  // container DIV to hold the visualization
        .data(data)  // data to use with the visualization
        .type("tree_map")   // visualization type
        .id("categoria")         // key for which our data is unique on
        .size("numDatasets")      // sizing of blocks
        //.aggs({"numDatasets": "mean"})
        .format("es_ES")
        .attrs(attributes)
        .color("hex")
        .font({
          "family": "sans-serif",
          "size": 15
        })
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
