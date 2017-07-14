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
      alert("funciona");

				var visualization = d3plus.viz()
			    .container("#viz")
			    .data(data)
			    .type("line")
			    .id("categoria")
			    .y("total")
			    .x("dia")
			    .draw()

		},
		error : function(data) {

			console.log(data);
      alert("Esto no tira");

		}
	});
});
})
