
// var servidor  = "http://localhost" //local
var puerto    = "8080"
var servidor="https://apirestanalisis.herokuapp.com"
var direccion = servidor + "/" //local

//var direccion = servidor + ":" + puerto + "/" //local

function distribucion(){
  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  $.ajax({
    url : direccion + "distribucion",
    type : "GET",
    data: parametro,
    success : function(data) {

      console.log(data);

      elMes = $("#mes option:selected").text();
      titulo = "Temas mencionados en Twitter en " + elMes

      var attributes = [
  {categoria: "Turismo", color: "#BF1E2E", image:"images/ico-category/ico-cat-turismo-hover-alt.png"},
  {categoria: "Industria",  color: "#EF4136","image":"images/ico-category/ico-cat-industria-hover-alt.png"},
  {categoria: "Empleo",  color: "#F25A29","image":"images/ico-category/ico-cat-empleo-hover-alt.png"},
  {categoria: "Seguridad",  color: "#F8931F","image":"images/ico-category/ico-cat-seguridad-hover-alt.png"},
  {categoria: "Hacienda",  color: "#FCB042","image":"images/ico-category/ico-cat-hacienda-hover-alt.png"},
  {categoria: "Salud",  color: "#F9EE35","image":"images/ico-category/ico-cat-salud-hover-alt.png"},
  {categoria: "Comercio",  color: "#F9EE34", "image":"images/ico-category/ico-cat-comercio-hover-alt.png"},
  {categoria: "Educación",  color: "#D8DE24", "image":"images/ico-category/ico-cat-educacion-hover-alt.png"},
  {categoria: "Vivienda",  color: "#8DC641", "image":"images/ico-category/ico-cat-vivienda-hover-alt.png"},
  {categoria: "Ciencia y tecnología",  color: "#272262","image": "images/ico-category/ico-cat-ciencia-hover-alt.png"},
  {categoria: "Medio ambiente",  color: "#2B3991", "image":"images/ico-category/ico-cat-medio-ambiente-hover-alt.png"},
  {categoria: "Economía",  color: "#29AAE3","image": "images/ico-category/ico-cat-economia-hover-alt.png"},
  {categoria: "Transporte",  color: "#01A79D", "image":"images/ico-category/ico-cat-transporte-hover-alt.png"},
  {categoria: "Demografía",  color: "#2BB673", "image":"images/ico-category/ico-cat-demografia-hover-alt.png"},
  {categoria: "Deporte",  color: "#016738", "image":"images/ico-category/ico-cat-deporte-hover-alt.png"},
  {categoria: "Energía",  color: "#009345", "image":"images/ico-category/ico-cat-energia-hover-alt.png"},
  {categoria: "Urbanismo e infraestructuras",  color: "#3AB54B", "image":"images/ico-category/ico-cat-urbanismo-hover-alt.png"},
  {categoria: "Sector público",  color: "#672D93", "image":"images/ico-category/ico-cat-sector-publico-hover-alt.png"},
  {categoria: "Legislación y justicia",  color: "#92278F", "image":"images/ico-category/ico-cat-legislacion-hover-alt.png"},
  {categoria: "Cultura y ocio",  color: "#9E1F64", "image":"images/ico-category/ico-cat-ocio-y-cultura-hover-alt.png"},
  {categoria: "Sociedad y bienestar",  color: "#DA1C5C", "image":"images/ico-category/ico-cat-sociedad-y-bienestar-hover-alt.png"},
  {categoria: "Medio Rural",  color: "#9B8578", "image":"images/ico-category/ico-cat-medio-rural-hover-alt.png"}
]
	 


      link = direccion + "descarga?anyo=" + parametro.anyo + "&mes=" + parametro.mes
      // instantiate d3plus
      //$( "#grafico_distribucion" ).empty();
	  $( "#graficoP" ).empty();
      var grafico = d3plus.viz()
       //.container("#grafico_distribucion")  // container DIV to hold the visualization
	   .container("#graficoP")
        .data(data)  // data to use with the visualization
        .type("tree_map")   // visualization type		
		.icon({
			  "style": "knockout",
			  "value": "image"
			})

        .id("categoria")         // key for which our data is unique on
        .size("Nº Tweets")      // sizing of blocks
		.labels(
				{"align": "left", "valign": "top",
				"size":"30"}
				)
		.legend(false)
		.depth(0)
        .format("es_ES")
        .attrs(attributes)
        .color("color")
        .font({
          "family": "sans-serif",
          "size": 15
        })

        .draw()
    },
	
    error : function(data) {

      console.log(data);

    }
  });
}



$(document).ready(function(){
  distribucion()

  $('#anyo').on('change', function() {
    distribucion()
  })
  $('#mes').on('change', function() {
    distribucion()
  })
})
