// var servidor  = "http://localhost" //local
var puerto    = "8080"
var servidor="https://apirestanalisis.herokuapp.com"
var direccion = servidor + "/" //local

//var direccion = servidor + ":" + puerto + "/" //local


function comparacion(){
  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  var respuestasDatos = null;
  $.ajax({ // Función que hace la petición
    type : "GET",       // Tipo de petición
    data: parametro,    // Parametros que se mandan
    url : direccion + "comparacion",
    success : function(data) {
      console.log(data);

      elMes = $("#mes option:selected").text();
      titulo:'Evolución de twitter durante el mes de '+elMes;

      var respuestasDatos = [{
        x: data['x'],
        y: data['y'],
        marker:{
          color: data["color"]
        },
        type: 'bar'
      }];

       var layout = {
         yaxis: {fixedrange: true},
         xaxis: {fixedrange: true, visible:false}
       };

        // title: ''
      // };

      //Plotly.newPlot('grafico_comparacion', respuestasDatos, layout);
    Plotly.newPlot('grafico_comparacion', respuestasDatos, layout, {displayModeBar: false});

  },
  error : function(data) {

    console.log(data);

  }
  });
} // function comparacion()

$(document).ready(function(){

	comparacion()

	$('#anyo').on('change', function() {
    comparacion()
  })
  $('#mes').on('change', function() {
    comparacion()
  })

})
