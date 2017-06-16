# Class 4: Data Joining and Updating

## Show and Tell

- Trump vs. Obama: https://www.wsj.com/graphics/donald-trump-companies-assess-the-risks/
- Tensorflow
	- Build a vis that's cool that you understand how to interact with
	- How do you frame it in such a way that readers can understand also?
- Martin Wattenberg & Fernanda Viegas: https://www.youtube.com/watch?v=ugkfmHBW74Q
- Visual Vocabulary: https://github.com/ft-interactive/chart-doctor/blob/master/visual-vocabulary/Visual-vocabulary.pdf
- National Geographic "Seven Things to know about Climate Change": http://www.nationalgeographic.com/magazine/2017/04/seven-things-to-know-about-climate-change/

## From Last Class

- Review `d3.json`, `d3.csv`, `d3.queue`
- Review `d3.nest`
- Review `d3.enter`, `d3.append`

- Went over JS Asynch
- Reviewe `d3.queue`
- JS Promise: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- `d3.filter()`, `d3.map()`

## Enter-update-exit

- Mike Bostock "Object Constancy": https://bost.ocks.org/mike/constancy/

```
var bars = svg.selectAll("rect")
	// .data(data, d => d);
	.data(data, function(d) { return d; });		// controls which part of the data gets assigned
```

```
d3.select('rect')
	.datum()		// getter

d3.select('rect')
	.datum(100)		// setter
```

```
.enter().update().merge()
```

## Break (15 Minutes)

