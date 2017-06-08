# Metis Data Visualization with D3.js - Class 2

- Wednesday, June 7, 2017
- Instructor: Shirley & Seemant

## Intro

- Weather!
	- Wind map / Fenanda Viegas
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

- d3.scaleOrdinal()
	- [a, b, c, d, e, f, g ] => [ red, yellow, pink, ... ]
	- have to define all values

- yScale = d3.scaleLinear()
	.domain()
	.range()

- xScale = d3.scaleLinear()
	.domain()
	.range()

## Homework

- THe Wealth & Health of Nations
	- http://jsonformatter.curiousconcept.com
	- copy/paste data
	- later: use JSON or .csv()
	- y-axis: life expectancy
	- x-axis: per capita