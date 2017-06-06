# Metis Data Visualization with D3.js

- Monday, June 5, 2017
- Instructor: Shirley & Seemant

- Use Case: NYTimes "The Facebook Offering: How It Compares"
- http://blockbuilder.org/

## Lecture

- HTML / XML
- SVG
- Biblical magic number: 960x500
- Translate
- Scale

- #d3brokeandmadeart
- http://www.colors.commutercreative.com/

## Blog

[(View all code examples)](https://bl.ocks.org/danaoira)

Today was the first day of class for the Data Visualization with D3.js course at Metis San Francisco. The course was created by Kevin Quealy, who is a graphics editor for the New York Times. The course is taught by Shirley Wu and Seemant K.

- Basic SVG Shapes
- SVG Transforms
- SVG Paths

### Basic SVG Shapes

We quickly dove in with a quick overview of XML to show its relation to HTML and SVG. We learned simple SVG shapes and attributes.

![01]

### SVG Transforms

Next, we learned about SVG transforms with `translate()` and `scale()`.

![02]

`translate()` we used to move the x and y coordinates of our shapes.

`scale()` changes the zoom of the SVG elements.

The order that these two transforms appear in the `transform` attribute does make a difference and will execute in order. I felt that `scale()` before `translate()` would be more dangerous and harder to control than the opposite way around.

I feel that doing `translate` prior to `scale` gives more control with the positioning because the coordinates are updated first and then the scale/zoom is applied.

### SVG Paths

The next topic covered SVG paths, which went over lines, quadratic, curves and arcs.

We first started drawing a shape with paths out by hand, which was a blocky heart. It was a nice example of drawing by hand and understanding the coordinate system.

![03]

To practice paths, we created smiley faces using all the things we learned in class.

![04]

We were then introduced to a website called SVG Path Builder. It made understanding the differences between lines, quadratics, curves and arcs very easy and also generated the coordinates for the path created.

![05-path-builder]

We were open to making more smiley faces, so I wanted to challenge myself by making a bunny smiley! This was what I was able to finish by the end of class.

![05-bunny]

I do agree with the instructors that the SVG Path Builder makes it really easy to understand and make paths, but doing them by hand and planning out the coordinates manually is the better way to go about learning it.

Other interesting sites we learned about were:

- [#d3brokeandmadeart](https://twitter.com/hashtag/d3brokeandmadeart) - A Twitter hashtag of D3 as art
- [147 Colors](http://www.colors.commutercreative.com/) - An interactive website of 147 CSS common color names

[01]: 01-svg.PNG "Basic SGV Shapes"
[02]: 02-svg-transforms.PNG "SVG Transforms"
[03]: 03-svg-paths.PNG "SVG Paths"
[04]: 04-svg-smiley.PNG "SVG Smiley"
[05-path-builder]: 05-svg-path-builder.PNG "SVG Path Builder"
[05-bunny]: 05-svg-bunny-in-progress.PNG "SVG Bunny in Progress"