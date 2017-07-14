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
		url : "http://localhost:8080/tophashtags",
		data: parametro,
		success : function(data) {
			console.log(data);
      alert("Funciona");

      // instantiate d3plus
      var visualization = d3plus.viz()
        .container("#viz")  // container DIV to hold the visualization
        .data(data)  // data to use with the visualization
        .type("bar")   // visualization type
				.id("palabra")
        .x("palabra")         // key for which our data is unique on
        .y("menciones")      // sizing of blocks
        .draw()


		},
		error : function(data) {

			console.log(data);
      alert("Esto no funciona");

		}
	});
});
})
