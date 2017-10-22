
function catalogo(){

  var $anyo= $('#anyo');
  var $mes= $('#mes');
  var parametro = {
    anyo: $anyo.val(),
    mes: $mes.val()
  };

  $.ajax({
    //url : "http://localhost:8080/catalogo",
	url:"https://apirestanalisis.herokuapp.com/catalogo",
    type : "GET",
    data: parametro,
    success : function(data) {

      console.log(data);



      elMes = $("#mes option:selected").text();
      titulo = "Número de catálogos de datos en " + elMes

      var attributes = [
  {Categoría: "Ciencia y tecnología",  color: "#272262","image": "images/ico-category/ico-cat-ciencia-hover-alt.png"},
  {Categoría: "Comercio",  color: "#F9EE34", "image":"images/ico-category/ico-cat-comercio-hover-alt.png"},
  {Categoría: "Turismo", color: "#BF1E2E", image:"images/ico-category/ico-cat-turismo-hover-alt.png"},
  {Categoría: "Industria",  color: "#EF4136","image":"images/ico-category/ico-cat-industria-hover-alt.png"},
  {Categoría: "Empleo",  color: "#F25A29","image":"images/ico-category/ico-cat-empleo-hover-alt.png"},
  {Categoría: "Seguridad",  color: "#F8931F","image":"images/ico-category/ico-cat-seguridad-hover-alt.png"},
  {Categoría: "Hacienda",  color: "#FCB042","image":"images/ico-category/ico-cat-hacienda-hover-alt.png"},
  {Categoría: "Salud",  color: "#F9EE35","image":"images/ico-category/ico-cat-salud-hover-alt.png"},
  {Categoría: "Educación",  color: "#D8DE24", "image":"images/ico-category/ico-cat-educacion-hover-alt.png"},
  {Categoría: "Vivienda",  color: "#8DC641", "image":"images/ico-category/ico-cat-vivienda-hover-alt.png"},
  {Categoría: "Medio ambiente",  color: "#2B3991", "image":"images/ico-category/ico-cat-medio-ambiente-hover-alt.png"},
  {Categoría: "Economía",  color: "#29AAE3","image": "images/ico-category/ico-cat-economia-hover-alt.png"},
  {Categoría: "Transporte",  color: "#01A79D", "image":"images/ico-category/ico-cat-transporte-hover-alt.png"},
  {Categoría: "Demografía",  color: "#2BB673", "image":"images/ico-category/ico-cat-demografia-hover-alt.png"},
  {Categoría: "Deporte",  color: "#016738", "image":"images/ico-category/ico-cat-deporte-hover-alt.png"},
  {Categoría: "Energía",  color: "#009345", "image":"images/ico-category/ico-cat-energia-hover-alt.png"},
  {Categoría: "Urbanismo e infraestructuras",  color: "#3AB54B", "image":"images/ico-category/ico-cat-urbanismo-hover-alt.png"},
  {Categoría: "Sector público",  color: "#672D93", "image":"images/ico-category/ico-cat-sector-publico-hover-alt.png"},
  {Categoría: "Legislación y justicia",  color: "#92278F", "image":"images/ico-category/ico-cat-legislacion-hover-alt.png"},
  {Categoría: "Cultura y ocio",  color: "#9E1F64", "image":"images/ico-category/ico-cat-ocio-y-cultura-hover-alt.png"},
  {Categoría: "Sociedad y bienestar",  color: "#DA1C5C", "image":"images/ico-category/ico-cat-sociedad-y-bienestar-hover-alt.png"},
  {Categoría: "Medio Rural",  color: "#9B8578", "image":"images/ico-category/ico-cat-medio-rural-hover-alt.png"}]

      $( "#portal_transparencia" ).empty();
      var grafico = d3plus.viz()
        .container("#portal_transparencia")  // container DIV to hold the visualization
        .data(data)  // data to use with the visualization
        .type("tree_map")   // visualization type
		.icon({
			  "style": "knockout",
			  "value": "image"
			})
		.labels(
				{"align": "left", "valign": "top"}
				)
		.depth(0)
        .id("Categoría")         // key for which our data is unique on
        .size("Nº Datasets")      // sizing of blocks
        //.aggs({"numDatasets": "mean"})
		.legend(false)
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
  catalogo()


  $('#anyo').on('change', function() {
    catalogo()
  })
  $('#mes').on('change', function() {
    catalogo()
  })
})
