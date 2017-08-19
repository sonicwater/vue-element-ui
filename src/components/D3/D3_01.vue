<template>
    <div id="D3">
        <form>
		  <label><input type="radio" name="dataset" value="apples" checked> Apples</label>
		  <label><input type="radio" name="dataset" value="oranges"> Oranges</label>
		</form>
    </div>
</template>
 
<script>
import d3 from 'd3';
export default {
    data() {
    	return{
            
        }
    },
    components: {
    },
    mounted() {
  var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

var color = d3.scale.category20();

var pie = d3.layout.pie()
    .value(function(d) { return d.apples; })
    .sort(null);

var arc = d3.svg.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 20);

var svg = d3.select("#D3").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

d3.tsv("./src/components/D3/D3_01_data.tsv", type, function(error, data) {
  var path = svg.datum(data).selectAll("path")
      .data(pie)
    .enter().append("path")
      .attr("fill", function(d, i) { return color(i); })
      .attr("d", arc);

  d3.selectAll("input")
      .on("change", change);

  var timeout = setTimeout(function() {
    d3.select("input[value=\"oranges\"]").property("checked", true).each(change);
  }, 2000);

  function change() {
    var value = this.value;
    clearTimeout(timeout);
    pie.value(function(d) { return d[value]; }); // change the value function
    path = path.data(pie); // compute the new angles
    path.attr("d", arc); // redraw the arcs
  }
});

function type(d) {
  d.apples = +d.apples;
  d.oranges = +d.oranges;
  return d;
}

    }
}
</script>
 
<style>
</style>