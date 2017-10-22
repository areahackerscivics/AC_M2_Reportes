
// var servidor  = "http://localhost" //local
var puerto    = "8080"
var servidor="https://apirestanalisis.herokuapp.com"
var direccion = servidor + "/" //local

//var direccion = servidor + ":" + puerto + "/" //local

function leyenda(){
  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  $.ajax({
    url : direccion + "leyenda",
    type : "GET",
    data: parametro,
    success : function(data) {

      console.log(data);


	  $( "#hook" ).empty();
	   $( "#mytooltip" ).empty();
var svg = d3.select("#hook").append("svg")
			.attr("id","gruporect")
			.attr({
                "width" : "1000px",
                "height" : "250px"
            });
var datas = [
  {id: "Ciencia y tecnología",  color: "#272262","image": "images/ico-category/ico-cat-ciencia-hover-alt.png"},
  {id: "Comercio",  color: "#F9EE34", "image":"images/ico-category/ico-cat-comercio-hover-alt.png"},
  {id: "Cultura y ocio",  color: "#9E1F64", "image":"images/ico-category/ico-cat-ocio-y-cultura-hover-alt.png"},
  {id: "Demografía",  color: "#2BB673", "image":"images/ico-category/ico-cat-demografia-hover-alt.png"},
  {id: "Deporte",  color: "#016738", "image":"images/ico-category/ico-cat-deporte-hover-alt.png"},
  {id: "Economía",  color: "#29AAE3","image": "images/ico-category/ico-cat-economia-hover-alt.png"},
  {id: "Educación",  color: "#D8DE24", "image":"images/ico-category/ico-cat-educacion-hover-alt.png"},
  {id: "Empleo",  color: "#F25A29","image":"images/ico-category/ico-cat-empleo-hover-alt.png"},
  {id: "Energía",  color: "#009345", "image":"images/ico-category/ico-cat-energia-hover-alt.png"},
  {id: "Hacienda",  color: "#FCB042","image":"images/ico-category/ico-cat-hacienda-hover-alt.png"},
  {id: "Industria",  color: "#EF4136","image":"images/ico-category/ico-cat-industria-hover-alt.png"},
  {id: "Legislación y justicia",  color: "#92278F", "image":"images/ico-category/ico-cat-legislacion-hover-alt.png"},
  {id: "Medio Rural",  color: "#9B8578", "image":"images/ico-category/ico-cat-medio-rural-hover-alt.png"},
  {id: "Medio ambiente",  color: "#2B3991", "image":"images/ico-category/ico-cat-medio-ambiente-hover-alt.png"},
  {id: "Salud",  color: "#F9EE35","image":"images/ico-category/ico-cat-salud-hover-alt.png"},
  {id: "Sector público",  color: "#672D93", "image":"images/ico-category/ico-cat-sector-publico-hover-alt.png"},
  {id: "Seguridad",  color: "#F8931F","image":"images/ico-category/ico-cat-seguridad-hover-alt.png"},
  {id: "Sociedad y bienestar",  color: "#DA1C5C", "image":"images/ico-category/ico-cat-sociedad-y-bienestar-hover-alt.png"},
  {id: "Transporte",  color: "#01A79D", "image":"images/ico-category/ico-cat-transporte-hover-alt.png"},
  {id: "Turismo", color: "#BF1E2E", "image":"images/ico-category/ico-cat-turismo-hover-alt.png"},
  {id: "Urbanismo e infraestructuras",  color: "#3AB54B", "image":"images/ico-category/ico-cat-urbanismo-hover-alt.png"},
  {id: "Vivienda",  color: "#8DC641", "image":"images/ico-category/ico-cat-vivienda-hover-alt.png"}
]

var myTool = d3.select("body")
                      .append("div")
                      .attr("class", "mytooltip")
                      .style("opacity", "0")
                      .style("display", "none");
var legend = svg.selectAll(".legend")
.data(data)
.enter().append("g")
     .attr("class", function(d, i) { return data[i].Categoria})
     .attr("transform", function(d, i) { return "translate(" + i * 42 + ",0)"; })
		      .on("mouseover", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.style("cursor", "pointer")
		  			.attr("width", 60)
		  			myTool
                      .transition()
                      .duration(500)
                      .style("opacity", "1")
                      .style("display", "block")
                    myTool
                      .html(
                      "<div id='thumbnail'><table><caption>"+ d.Categoria  +"</caption><tr><td style="+"font-weight:bold"+">% Tweets</td><td>"+d.Tweets+"</td></tr><tr><td style="+"font-weight:bold"+">% Datasets</td><td>"+d.Datasets+"</td></tr></table></div>"
                      )
                      .style("left", (d3.event.pageX - 95) + "px")
                      .style("top", (d3.event.pageY - 130) + "px")

		      })
		      .on("mouseout", function(d){
		  		d3.select(this)
		  			.transition()
		  			.duration(500)
		  			.style("cursor", "normal")
		  			.attr("width", 40)
		  			myTool.transition()
                        .duration(500)
                        .style("opacity", "0")
                        .style("display", "none")

		      });

legend.append("rect")
     .attr("width", 40)
     .attr("height", 40)
	 //.style("fill",color);
     .style("fill", function(d, i) { return datas[i].color})


legend.append("image")
     .attr("width", 40)
     .attr("height", 40)
	 //.style("fill",color);
     .attr("href", function(d, i) { return datas[i].image})

d3.select("body")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
      .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
      .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
	},

    error : function(data) {

      console.log(data);

    }
  });
}



$(document).ready(function(){
  leyenda()

  $('#anyo').on('change', function() {
    leyenda()
  })
  $('#mes').on('change', function() {
    leyenda()
  })
})
