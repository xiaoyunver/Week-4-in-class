//Exercise 4: putting together arrays, objects, and d3

//Set up the drawing environment here
var margin = {t:20,r:20,b:20,l:20};
var width = document.getElementById('plot').clientWidth-margin.l-margin.r,
	height = document.getElementById('plot').clientHeight-margin.t-margin.b;


//Run Math.random() n number of times, and check to see where they are distributed
var numOfTrials = 300;
var plot = d3.select('#plot')
	.append('svg')
	.attr('width',width+margin.l+margin.r)
	.attr('height',height+margin.t+margin.b)
	.append('g')
	.attr('transform','translate('+margin.l + ',' + margin.r + ')')


function runAnExperiment(){}
//First, run trials with Math.random() and generate data points as an array
	var trials = [], sum = 0;
	for (var i = 0; i < numOfTrials; i++) {
		var newNumber = Math.random();

		trials.push(newNumber);
		sum = sum + newNumber;
	}
//Then, visualize these data points as circles on a drawing
//What's the x axis?
//What's the y axis?

	trials.forEach(function (trial, index) {
		plot
			.append('circle')
			.attr('cx', index / numOfTrials * width)
			.attr('cy', trial * height)
			.attr('r', 2);

		plot
			.append('line')
			.attr('x1', 0)
			.attr('x2', width)
			.attr('y1', sum / numOfTrials * height)
			.attr('y2', sum / numOfTrials * height)
			.style('stroke', 'red')
			.style('stroke-width', '1px')
	})
d3.select('.canvas')
	.on('click',runAnExperiment)