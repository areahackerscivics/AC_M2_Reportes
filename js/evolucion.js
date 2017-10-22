var servidor="https://apirestanalisis.herokuapp.com"
var direccion = servidor + "/" //local

function evolucion(){
  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  $.ajax({ // Función que hace la petición
    type : "GET",       // Tipo de petición
    data: parametro,    // Parametros que se mandan
    url : direccion + "evolucion",
    success : function(data) {
      console.log(data);

      elMes = $("#mes option:selected").text();

    	var chart = c3.generate({
    		bindto: '#grafico_evolucion',
    		size: {
				height: 600,
				width:1100
    		},
    		padding: {
    				top: 10,
    				right:250,
    				bottom: 40,
    				left: 20,
    		},
    		data: {
          columns: data['resultado']
    		},
        color: {
          pattern: data['color']
            },

    		point:{
    				r: 2
    		},
    		legend:{
    			position: 'right',
    		},
        axis: {
    				x: {
    					 type: 'category',
    					 categories: ['1', '2', '3', '4', '5', '6','7','8','9','10','11',
    					 '12','13','14','15','16','17','18','19','20','21','22','23','24',
    					 '25','26','27','28','29','30','31'],
    					 label: 'Dias del Mes'
    				},
    				y: {
    						label: 'Nro Tweets'
    				}
          },
    		tooltip: {
    			format: {
    				title: function (x) {
    					return 'Dia ' + (x+1);
    				},
    				value: function (value, ratio, id) {
    					var format = id === 'data1' ? d3.format(',') : d3.format('');
    					return format(value);
    				}
    			}
    		}
    	});

    },
    error : function(data) {

      console.log(data);

    }
    });
}




$(document).ready(function(){

	evolucion()

	$('#anyo').on('change', function() {
    evolucion()
  })
  $('#mes').on('change', function() {
    evolucion()
  })


})
