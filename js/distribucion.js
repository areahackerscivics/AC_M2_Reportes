$(document).ready(function(){

	$.ajax({
		url : "http://localhost:8080/distribucion?anyo=2017&mes=01",
		type : "GET",
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

})
