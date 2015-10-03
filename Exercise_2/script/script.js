//First, find out a crucial piece of information: how wide and how high is the .canvas <div> element?
var width = document.getElementById('plot').clientWidth,
    height = document.getElementById('plot').clientHeight;

console.log("Width: ", width, "Height: ", height);

//Next, let's draw a <svg> element under .canvas <div>
//<svg> needs two attributes at least: width and height
var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',width) //note .attr()
    .attr('height',height)
    .append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r',50);

//Let's draw another circle
plot
    .append('circle')
    .attr('cx',200)
    .attr('cy',300)
    .attr('r',60);


plot
    .append('circle');

plot.append('rect');

plot.append('text');
