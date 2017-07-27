var servidor  = "http://localhost"
var puerto    = "8080"
var direccion = servidor + ":" + puerto + "/"




function evolucion(){

	var $anyo= $('#anyo');
	var $mes= $('#mes');
		anyo= $anyo.val();
		mes= $mes.val();
		elMes = $("#mes option:selected").text();
		titulo:'Evolución de Tweets durante el mes de '+elMes;

	var chart = c3.generate({
		bindto: '#grafico_evolucion',
		size: {
				height: 500,
				width:1000
		},
		padding: {
				top: 10,
				right:250,
				bottom: 40,
				left: 20,
		},
		data: {
				url : direccion + 'evolucion?anyo='+anyo+'&mes='+mes,
				mimeType: 'json'
		},
		title: {
	  		text:'Evolución de Tweets durante el mes de '+ elMes
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
