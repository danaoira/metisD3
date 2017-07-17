# Metis D3: Class 9

- Date: Monday, July 10, 2017
- Instructor: Shirley

## Intro

Upcoming

- 7/17: Guest Lecturer, Tony Chu
	- Requests: Scrollytelling in 3 hours!
- 7/19: Work on Projects

To Cover:

- (2) Nesting SVG
- (3) Force Layout
	- Calculates x/y positions of each node
- Geo
- (1) Data Transformation
- To practice: Get already cleaned data from BB
- Stacked to Multiples
- (2.5) Small multiples

## Data Transformations

- Start: Note data shape
	- Array of objects? Array of arrays (=> nested)?
	- Objects' attributes?
	- Do mapping of SVG -> Data
		- SVG					Data
		- circle 		->		object? array?
		- cx			->		attr? (year? time? height)
		- cy			-> 		attr? (temp? income/salary?)
		- r 			->		attr?
	- D3 expects an array of objects at the simplest

- End: What am I drawing?
	- Bar chart -> rect
	- Line chart -> path
	- Bubble chart -> circle
	- SVG elements, what do they look like?
		- What attrs needed?
			- x, y, width, height
			- cx, cy, r
			- colors?
			- d (path)

- In D3: Object is always going to be 1 SVG element
	- 1 object = 1 SVG element
	- Always wrap in an array so D3 know it's an array of that element that's going to be rendered.

- Anytime you need to add a child on the parent, do it on the enter()

- D3 rebinds data on `.select()` and `.append()`, so you don't always have to call `.data()` or `.datum()` to update children if the parent has already been updated.

## Homework

- Find a previous graph and put a text label