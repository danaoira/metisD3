# Metis Data Visualization with D3.js

# Blog Post Draft

**Info:** This post is part of [Data Visualization with D3.js - Week 1](/data-visualization-with-d3js-week-1/)
{: .notice_info}

Week 1 ended with an assignment for creating a scatterplot on **The Health and Wealth of Nations, 2009**.

## Steps

I did this in 3 parts.

1. "Prettify-ing" JSON Data
2. Data Exploration with Python Pandas
3. D3.js Development

## "Prettify-ing" JSON Data

pret·ti·fy
:   make (someone or somethign) appear superficially pretty or attractive

It helps to look at code or data when it looks readable or "pretty".

The original data set looked like this:

```
[{"name":"Angola","income":5055.59,"lifeExpectancy":47.58},{"name":"Benin","income":1457.57,"lifeExpectancy":61.89},{"name":"Botswana","income":12282.28,"lifeExpectancy":55.12}, ... ]
```

It reminded of the JavaScript spaghetti code that programmers liked to make in the early 2000s.

[JSON Formatter and Validator](https://jsonformatter.curiousconcept.com/) fixed that and I updated the JSON file with the formatted data.

[![01]](https://jsonformatter.curiousconcept.com/)

## Data Exploration with Python Pandas

I wanted to take it a step further by practicing some simple data science using Python Pandas.

You can either do it through the **console** or on **Jupyter Notebooks**.

For quick information that I don't plan on saving, I use the console. If I'm going to save and share the data, I use Jupyter Notebook.

Here's a simple walkthrough of how I use Pandas to quickly understand the data I'm dealing with.

1. Imports
2. Set variables
3. Read data
4. Get column variable neames
5. Get summary statistics per variable
6. View first few results

```
import pandas as pandas 				# imports
nations_file = "nations.json"			# variables
nations = pd.read_json(nations_file)	# read data

# get column variable names
nations.columns.values

# get summary statistics per variable
nations.describe()

# view head data (first few results)
nations.head()
```

Nothing too in-depth in terms of data science stuff. This amount of information is enough for me to use for D3.js. It helps me understand what variables I'm working with, what min and max values to expect for my scales and what the data looks like in a more readable form.

[![02]](https://github.com/danaoira/metisD3/blob/master/lab01/nations-data-exploration.ipynb)

**Jupyter Notebook:** [View the notebook with output results](https://github.com/danaoira/metisD3/blob/master/lab01/nations-data-exploration.ipynb)
{: .notice}

## D3.js Development

I went through three different versions of the scatterplot.

### Setting Up a Local Server

I also decided to move away from [BlockBuilder](http://blockbuilder.org) and run a local server on my computer. It makes debugging a lot easier.

To do this on Windows:

1. Open a **cmd** prompt.
2. `cd` to the file directory you want to work in.
3. Enter `python -m http.server 8000` in the console.
4. Open up a browser to **http://localhost:8000**.

Voila! Local server all set. Now onto D3 coding. 

### Version 1

Version 1 was me just trying to put together all the concepts from [Class 2](/2017-06-07-d3js-selections-data-binding-scales/).

I wanted to focus on getting the data points onto the screen.

![03]

I hit a lot of bumps with **selection**. I would sometimes do `d3.select` instead of `svg.select` and be working on the wrong element.

**Scale** confused me a few times with mixing up **domain** (data space) and **range** (screen space).

### Version 2

For version 2, I simply cleared out the `<body>` and started from scratch to try to work through it from memory.

This time, I wanted to add axes, which we did not go over in class, but had the lecture slides for.

![04]

Setting the circle coordinates didn't happen in the first try.

My data points were going outside of the SVG, especially if their x-value was greater than 960 (the width of the SVG).

I didn't realize that `xScale()` and `yScale()` could be used to adjust values if an x- or y-coordinate was passed in as a parameter.

### Version 3

I was determined to streamline my process for the final version. I also wanted to add the axes titles with the proper SVG positioning of `start`, `middle` and `end`.

I like to think in templates when I write code, so this is the base format I chose to work with:

```
d3.json("nations.json", function(error, json) {
	if (error) throw error;

	// set variables

	// set min-max

	// set scales

	// set axes

	// create svg

	// create elements (rect, circle, etc)

	// create axes

	// create titles
});
```

From there, it's simply filling out all the default values. I order them by x and y values.

This is what the template looks like. Values for variables and methods must be filled it.

```
d3.json("nation.json", function(error, json) {
	if (error) throw error;

	// set variables
	var data = json;
	var width;
	var height;
	var margin = { top: , right: , bottom: , left: };

	// set min-max
	var xExtent = d3.extent();
	var yExtent = d3.extent();

	// set scales
	var xScale = d3.scaleLinear()
		.domain()
		.range();
	var yScale = d3.scaleLinear()
		.domain()
		.range();

	// set axes
	var xAxis = d3.axisBottom()
		.scale();
	var yAxis = d3.axisLeft()
		.scale();

	// create svg
	var svg = d3.select("body")
		.append("svg")
		.attr("width", width)
		.attr("height", height);

	// create elements (rect, circle, etc)
	var circle = svg.selectAll("circle")
		.data()
		.enter()
		.append("circle")
		.attr("cx", )
		.attr("cy", )
		.attr("r", );

	// create axes
	var axisX = svg.append("g")
		.call(xAxis);
	var axisY = svg.append("g")
		.call(yAxis);

	// create titles	
})
```

Just fill in everything from top to bottom. Quick and easy!

The best way to get better at coding is with practice and when you can refine a routine for coding things out, you'll get much better and faster at it. It's kind of like a check list.

After filling those out, it's just a matter of adding CSS or filling in SVG attributes to color the graph the way you want it to look.

At the very end of each created element, I like to add `.attr("class", "class-name")` to reference a CSS class and do the styling within the CSS style.

I will write about CSS practices in another post, since that is an entire topic I can write about for days.

Other than that, here is the final result using two different scales:

### `scaleLinear()`

[![05]](http://blockbuilder.org/danaoira/cb7faa4758a0e9525c7b07c3154df22c)

### `scaleLog()`

[![06]](http://blockbuilder.org/danaoira/cb7faa4758a0e9525c7b07c3154df22c)

[Code](http://blockbuilder.org/danaoira/cb7faa4758a0e9525c7b07c3154df22c)

We were challenged to make this graph into a bar chart, so that will be my next project!

[01]: json-formatter.PNG
[02]: pandas.PNG
[03]: nations-v1.PNG
[04]: nations-v2.PNG
[05]: nations-v3.PNG
[06]: nations-v3-log.PNG