# Class 3: Reading Data & Reshaping Data

- "Data is dirty and you're gonna have to deal with it."
- http://brennancenter.github.io
- http://judicialselectionmap.brennancenter.org/?court=Supreme
- Recommends using GitHub pages for clients

## Class Examples from Lab Homework

- https://bl.ocks.org/kmix27/dffdc8b0494e860ef47e49bf05b29c9c
- https://bl.ocks.org/andrewdblevins/e93e11c0df21692929c0ba50692e1bb1

- Margin Convention by Mike Bostock: https://bl.ocks.org/mbostock/3019563
- d3.scaleQuantize(): https://github.com/d3/d3-scale/blob/master/README.md#_quantize

(10 minute break)

- Jekyll
- "Embrace limitations. That set of liminations creates a tunnel of (if you tunnel it right) incredible inspiration."
- Comfort -> Complacency -> Death

- Up to 80% of your time with #dataviz will be playing with dirty data

### JavaScript

- d3-array: https://github.com/d3/d3-array

- Lodash & Underscore.JS

- Phoebe Bright D3 Nest: http://bl.ocks.org/phoebebright/raw/3176159/
	- D3 Nest => A way to group data
	- rightclick -> Creates temp variable
		- Can assign temp var
	- temp4.has("South Asia")||temp4.set("South Asia", "blah")
	- d3.nest().key(function(d) { return d.region }).entries(countries)
	- temp4.get("Asia")
	- landlocked = d3.nest().key(function(d) { return d.landlocked }).object(countries)
	- name = d3.nest().key(function(d) { return d.name.official }).object(countries)
	- d3.nest().key(function(d) { return d.region }).key(function(d) { return d.subregion }).rollup(function(leaves) { return d3.sum(leaves, function(d) { return d.area }) }).entries(countries)

- Homework
	- Play with D3.nest
	- Make a visualization with the nested data
	- Do nesting, rolling up, bar chart, scatter plot, pie chart, etc