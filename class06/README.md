# Class 7

## Intro

- http://atlasofemotions.org/
- http://emotions.periscopic.com
	- Microsoft Cognitive Services API
- Chip Conly, Airbnb, "Emotional Equations"
- Andrew's Data Science friend is hiring someone PT w/ D3

## Lecture - Continuous Data

- Line charts vs Area Chart
	- Area chart
		- More impactful
		- Forces a zero
	- Line chart
		- Starts at an arbitrary place

- William Playfair
	- Difference between imports and exports
	- Two line charts
	- Simplifies time series plot
	- Gives understanding of what you're interested in

- Difference Chart
	- Difference between SF and NY weather

- Bivariate Area Chart
	- Density of sample is super critical to how you can interpret it
	- You don't gain value by having very fine-grain data
	- This one is hard because humans aren't good with up and down
	- Hard to see if it was really narrow or if it was anomalous
	- Resample : Instead of daily, have weekly rolling average

- Extra Credit: Resample the Bivariate Area Chart

## d3.line()

- Generates a line if you give it coordinates (x, y) and draws a line between them

```
var data = [];

var line = d3.line()
	.x()
	.y()
	.curve();

line.data(data);
```

## References

- [Fusion Charts](http://www.fusioncharts.com/blog/2013/06/line-charts-vs-area-charts/)
- [SVG Attribute Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute)
- [Erik Hazzard - SVG Filters](http://vasir.net/blog/data-visualization/using-d3-and-svg-filters-to-create-fog-of-war)

## Select

<select></select>
var dropdown = d3.select("select")
	.selectAll("option")
	.data()
	.enter()
	.append("option")
	.text(function(d) { return d.name; })

## Events

- .on("mousemove", function(d) { ... })
- .on("mouseover", function(d) { ... })
- .on("change", function(d) { ... })

console.log(this.value);

dropdown.on("change", function() {
	
})

var dropdown = d3.select("select");
var options = dropdown.selectAll("option")
	.data(data);
	
options.enter()
	.append("option")
	.text(d => d.name);