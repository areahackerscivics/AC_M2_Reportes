$(document).ready(function(){
$('#consultar').on('click', function() {
	var $anyo= $('#anyo');
  var $mes= $('#mes');
	var parametro = {
		anyo: $anyo.val(),
		mes: $mes.val()
	};

	$.ajax({
		type : "GET",
		url : "http://localhost:8080/evolucion",
		data: parametro,
		success : function(data) {
			console.log(data);
      alert("Ara si que va");

				var visualization = d3plus.viz()
			    .container("#viz")
			    .data(sample_data)
			    .type("line")
			    .id("categoria")
			    .y("tweets")
			    .x("year")
			    .draw()

		},
		error : function(data) {

			console.log(data);
      alert("Esto no tira");

		}
	});
});
})
