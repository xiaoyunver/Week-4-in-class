//Exercise 4: putting together arrays, objects, and d3

//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;

console.log(width);
console.log(height);

var plot = d3.select('.canvas')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('transform','translate('+margin.l+','+margin.t+')');

//Run Math.random() n number of times, and check to see where they are distributed
var numOfTrials = 300;

//First, run trials with Math.random() and generate data points as an array

//Then, visualize these data points as circles on a drawing
//What's the x axis?
//What's the y axis?

function runRandomTrials(){

	var trials = [];
	//var color = 'rgb('+255*Math.random()+','+255*Math.random()+','+255*Math.random()+')';
	var color = 'rgb(255,'+Math.floor(255*Math.random())+',0)'
	console.log(color);
	
	for(var i=0; i<numOfTrials; i++){
		trials.push({
			t:i,
			v:Math.random()
		})
	}


	var sum = 0;

	trials.forEach(function(trial){
		plot
			.append('circle')
			.attr('cx', trial.t*width/numOfTrials)
			.attr('cy', trial.v*height)
			.attr('r',2)
			.style('fill',color)

		sum += trial.v;
	});

	plot.append('line')
		.attr('x1',0)
		.attr('x2',width)
		.attr('y1',sum/numOfTrials*height)
		.attr('y2',sum/numOfTrials*height)
		.style('stroke',color)
		.style('stroke-width','1px');
}


for(var i=0; i<20; i++){
runRandomTrials();
}

