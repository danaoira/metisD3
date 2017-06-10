# Metis Data Visualization with D3.js - Class 2

- Wednesday, June 7, 2017
- Instructor: Shirley & Seemant

## Intro

- Weather!
	- Wind map / Fernanda Viegas
	- EarthWindMap: http://earth.nullschool.net
	- Syntagmatic Wind Map

## Lecture

- Read: https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9
- You: What? / Customer: Tells you how / You: Ask why to get the what
- "There are three kinds of lies: Lies, damned lies and statistics. Data Visualization deals with statistics, which makes them the biggest liars. You have a responsibility (if you take it upon yourself) to stick with your principles in data visualization."

- VisualizingData.com
- http://r2d3.us/visual-intro-to-machine-learning-part-1
	- Father of scrolly telling!
- Don't miss class on July 17! (Scrolly telling!!!)
- Scroll jacking 

## Selections and Data Binding
- http://slides.com/shirleywu/fm-d3intro#/4
- ES6
	- => {} == function { ... }
- Thoughts on ES6: Would not recommend a new programmer to take up ES6 unless (a) they master traditional JavaScript and (b) they learned a typed, traditional object-oriented language

- Did a bar chart example using
	- `<rect />` defined
	- `<rect />` not defined => `.data()` `.enter()` `.append()`

## Scales

- "Your job as a visualizer is to take a ton of unstructured data and make it into something pretty."

- `d3.scaleLinear()`
- `d3.scaleOrdinal()`
- domain = data space
- range = display space

- `d3.scaleOrdinal()`
	- `[a, b, c, d, e, f, g ]` => `["red", "yellow", "pink", ... ]`
	- have to define all values

```
var yScale = d3.scaleLinear()
	.domain()
	.range()
```

```
var xScale = d3.scaleLinear()
	.domain()
	.range()
```

```
var extent = d3.extent(data, function(d) { return d[city] })
```

## Homework

- The Wealth & Health of Nations
	- http://jsonformatter.curiousconcept.com
	- copy/paste data
	- later: use JSON or .csv()
	- y-axis: life expectancy
	- x-axis: per capita

---

# Blog

## Topics

- The Weather
- Design and Redesign & Other Case Studies
- Selections and Data Binding
- Scales

## The Weather

Coming from Southern California, weather talk down there isn't very interesting since it's sunny and hot there most months out of the year. After moving to the The Bay Area, the weather is actually really interesting to talk about.

On the topic of weather, class started with weather data visualizations. If you thought weather talk in San Francisco was cool, D3.js weather talk is even cooler - even down to the classical examples that are still live.

[![01]](http://hint.fm/projects/wind/)

Fernanda Viega Wind Map

[![02]](http://earth.nullschool.net)

Earth Wind Map

Although not all D3.js examples, they were very inspirational pieces of the earlier days of interactive data visualization.

[![03](https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9)]

We switched gears to discuss [Design and Redesign](https://medium.com/@hint_fm/design-and-redesign-4ab77206cf9). The article drives the movement of more criticism for visual design. Many times, people easily adopt graphs as proven fact, when there can be bias lying underneath.

I especially enjoyed that the article mentions [Dr. Edward Tufte](http://edwardtufte.com). I [took his masterclass](https://www.edwardtufte.com/tufte/courses) a few weeks ago when he was visiting San Francisco and managed to get all copies of his books, including his most famous and widely-referenced [The Visual Display of Quantitative Information](https://www.edwardtufte.com/tufte/books_vdqi).

At a recent meetup at the University of San Francisco's Data Analytics Seminar Series, [Elijah Meeks](http://elijahmeeks.com/), the author of [D3.js in Action](https://www.manning.com/books/d3-js-in-action) also referenced Tufte at the beginning of his presentation. Tufte is definitely an author you won't want to leave out of a data visualization repertoire.

Our last discussion was on what I like to call an "interactive white paper" called [A visual introduction to machine learning](http://www.r2d3.us/visual-intro-to-machine-learning-part-1/).

[![04]](www.r2d3.us/visual-intro-to-machine-learning-part-1/)

Our instructors dubbed the single-page style as **"scrolly telling"** and the name is well-deserved after skimming through the page even for a few seconds.

I was pleasantly surprised to see this visualization because I came across it at an Artificial Intelligence conference a few months ago. Ironically enough, this visualization was what made me realize that data visualization was exactly and passionately what I wanted to do.

## Selections and Data Binding

**A note on style:** All code examples will use the traditional computer science style convention of double quotes (`""`) for strings, single quotes (`''`) for chars and no quotes around number values.
{: .notice_info}

Okay, on to the learning part! After so much inspiration, we were in for a surprise with lecture as we dove into D3.

We did a bar chart examples to practice selections and data binding.

Since D3 is derived from JavaScript **DOM manipulation** is key. The first encounter in D3 is with a **select** statement. Start of by selecting which DOM element to work with:

### Selection

- `d3.select()` selects one element
- `d3.selectAll()` selects all elements of the same type

An example with elements already defined in the `body`:

```
<svg width="960" height="500">
	<circle />
</svg>

<script>
	d3.select("circle")
		.attr("cx", 100)
		.attr("cy", 100)
		.attr("r", 10)
		.attr("fill", "gray");
</script>
```

The `select` will update the `circle` element to:

`<circle cx=100 cy=100 r=10 fill="gray" />`

### Data Binding

**Info:** The following code is based off of [The Health and Wealth of Nations]().
{: .notice_info}

**Data binding** is useful if the svg elements aren't already created, or you want to make them dynamically:

```
svg.selectAll("circle")
	.data(data)				 
	.enter()
	.append("circle");
```

What the above does is:

1. `.selectAll("circle")` selects all `<circle />` elements
2. `.data(data)` stores all the data to be used
3. `.enter()` creates place holders in `circle` for all data elements stored
4. `.append("circle")` creates an empty `circle` element for every data point with its data assigned to that circle element

It's a very quick and painless way of mapping data to elements. The hard part is understanding it conceptually, but our instructors taught it very well.

## Scales

<q>"Your job as a visualizer is to take a ton of unstructured data and make it into something pretty."</q> - [Seemant K](http://seemant.k.com)

Next up is **scales**. Scales do calculations to translate data point values within a display space.

The most common ones mentioned were:

- `d3.scaleLinear()`
- `d3.scaleOrdinal()`
- `d3.scaleLog()`
- `d3.scaleTime()`

Scales require a **domain** and **range**. A key idea that we learned for the relationship between domain and range is that:

- domain = data space
- range = display space

That was the most helpful thing for me to remember!

Setting up the code for scales usually looks like this:

```
var xScale = d3.scaleLinear()
	.domain()
	.range();

var yScale = d3.scaleLinear()
	.domain()
	.range();
```

The parameters `domain()` and `range()` take is an array of min and max values.

Ways to calculate min and max are with:

- `d3.min()`
- `d3.max()`
- `d3.extent()` which returns `[min, max]`

For min/max:

```
var min = d3.min();
var max = d3.max();
```

For extent:

```
var xExtent = d3.extent();
var yExtent = d3.extent();
```

Unfortunately during this class, I didn't make any coding examples myself and continued it with lab the next day.

Our take home assignement was to recreate this scatterplot using data from **Nations and their income + life expectancy, 2009**. It was inspired by [Hans ROsling's 2006 TED Talk](https://www.ted.com/talks/hans_rosling_shows_the_best_stats_you_ve_ever_seen).

![05]

For a bonus challenge, we were asked to make it into a bar chart.

[01]: /01-wind-map.PNG
[02]: /02-earth-wind-map.PNG
[03]: /03-design-and-redesign.PNG
[04]: /04-visual-intro-to-machine-learning.PNG
[05]: /05-nations.png