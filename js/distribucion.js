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
		url : "http://localhost:8080/distribucion",
		data: parametro,
		success : function(data) {
			console.log(data);
      alert("Ara si que va");

      // instantiate d3plus
      var visualization = d3plus.viz()
        .container("#viz")  // container DIV to hold the visualization
        .data(data)  // data to use with the visualization
        .type("tree_map")   // visualization type
        .id("categoria")         // key for which our data is unique on
        .size("numTweets")      // sizing of blocks
        .draw()


		},
		error : function(data) {

			console.log(data);
      alert("Esto no tira");

		}
	});
});
})
