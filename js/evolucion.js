$(document).ready(function(){
	$('#consultar').on('click', function() {
		var $anyo= $('#anyo');
		var $mes= $('#mes');
			anyo= $anyo.val();
			mes= $mes.val();
	var chart = c3.generate({
    bindto: '#chart',
		size: {height: 500},
		padding: {
        top: 40,
        right:200,
        bottom: 40,
        left: 250,
    },
    data: {
			url : 'http://localhost:8080/evolucion?anyo='+anyo+'&mes='+mes,
			mimeType: 'json'
		},

		point: {r: 2},
		legend: {position: 'right',
		item: {
							 onclick: function (d) {
											 console.log("onclick", d); //data1
											 show(d); //when I click legend show some data
											 chart.hide();
											 chart.show(d);
							 }
					 }
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
				position: function (data, width, height, element) {
					return {top: 50, left: 0};
				},
				format: {
					title: function (x) { return 'Dia ' + (x+1); },
					value: function (value, ratio, id) {
						var format = id === 'data1' ? d3.format(',') : d3.format('');
						return format(value);}}
			}

});
});
})
