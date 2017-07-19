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
			data = data.sort(function (a, b) {
            return d3.ascending(a.menciones, b.menciones);
        })

        //set up svg using margin conventions - we'll need plenty of room on the left for labels
        var margin = {
            top: 15,
            right: 25,
            bottom: 15,
            left: 100
        };

        var width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

        var svg = d3.select("#graphic1").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3.scale.linear()
            .range([0, width])
            .domain([0, d3.max(data, function (d) {
                return d.menciones;
            })]);

        var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .1)
            .domain(data.map(function (d) {
                return d.palabra;
            }));

					// set the colour scale
				  var color =  d3.scale.category20();

        //make y axis to show bar palabra
        var yAxis = d3.svg.axis()
            .scale(y)
            //no tick marks
            .tickSize(0)
            .orient("left");

        var gy = svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)

        var bars = svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("g")

        //append rects
        bars.append("rect")
            .attr("class", "bar")
            .attr("y", function (d) {
                return y(d.palabra);
            })
            .attr("height", y.rangeBand())
            .attr("x", 0)
            .attr("width", function (d) {
                return x(d.menciones);
            });

        //add a menciones label to the right of each bar
        bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.palabra) + y.rangeBand() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.menciones) + 3;
            })
            .text(function (d) {
                return d.menciones;
            });
		},
		error : function(data) {

			console.log(data);
      alert("Esto no funciona");

		}
	});
});
})
