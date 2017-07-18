# Metis D3

## Scroll Linked Animations

- AKA Scrollytelling

- Optical character recognition == Reading!

- http://noodleai.zoom.us/j/4065203944
- Distill.pub
	- Audience: ML research for oher ML researchers
- Tony's audience: Broader
- Work: R2D3, Let's Beat Congress
- Theme: Use motion/animation to explain an idea

- Motion linked to IAs with the page
- People like the idea of being able to move things & be in control
- Design principle: Drive engagement w/ delight from that sense of control

- Animation Render Loop
	- CS: Video game graphics

- Our Render Loop

- Request Animation Frame
	- way to call f() repeatedly

- D3 Transition
- Interpolation
- Instead of time as the input, scroll position is the input!
- Blockbuilder: http://bl.ocks.org/tonyhschu
- Big part: Understanding underneath of how animations/rendering is done is key
- Small Scroll-linked Animation Demo: https://bl.ocks.org/tonyhschu/af64df46f7b5b760fc1db1260dd6ec6a

- Encoding Scales
	- How do we map **Data to Geometry**?
- ScrollTop
	- Asking browser
	- Given the size of the window

- D3 scale
	- clamp	
		- value < 10 => 100
		- value < 100 => 100

- Trick #1: Sort of Responsive
	- Use vh units to define height of blocks
	- vh = 1/100 of the height of the screen = viewport height
	- 800px = 8vh
	- 1600 = 16vh

- Recap
	- What are scroll-linked anim?
	- Foundation 1: Animation Render Loop
	- Foundation 2: Scroll LIstener
	- Foundation 3: Encoding ANimations (Creative uses for scale f())
	- Trick 1: Making It (Kind Of) Responsive
	- Trick 2: Only re-render of scrollTop chnged

- Kind of responsive
	- Some things hard to look right in smaller screens
	- Usually try to do L-R layout

- "Real World" Example

- Ball Rolls Down The Tree
- Thought Process
	- Fixed Path
	- How to compute position along a path? => API: .getPointAtLength
		- What length?
		- ~~ScrollTop?~~ All points at the end laready
		- ~~ScrollTop - SectionTop?~~ All the points moving at the same time
		- ~~ScrollTop - SectionTop + per ball offset~~ - Staggering Movement! ..but too slow.
		- ~~ScT - SecT + per ball offset / factor~~
		- ScT - SecT + pbo / factor linked to window height => Good enough.
	- How to make more life like?
		- Add momentum
		- MomentumScrollTop should trail ActualScrollTop a little
		- Like a spring attached
	- Named the function xeno because it's inspired by Xeno's Paradox
		- Going halfway to door, always halfway to door with every step

- Resources
	- Ahmed Patel = RedBlockGames
	- Peek at what JS game devs are doing
		- Have to squeeze lots of computation in the browser, so they have lots of little tricks
	- Peeking at animation/graphic design blogs
		- Bees and Bombs : Twitter/Tumblr has lts of cool geometric animations

- Teaching
	- Nadieh: Jan - Mar
	- Shirley: Finished slides train ride to OpenDataVis

## Class Part 2: Linked Visualizations

- Scrollytelling is an act of love
- Toolbox of things you can pick up
- Have to architect what you're building
- Know how to use your tools

- Site: http://judicialselectionmap.brennancenter.org/?court=Supreme

- D3 Cross filter

- Linked vis is an interaction/interactive design issue
- Video games are an immersive experience
- We like to create immersive experiences
- In order to be immersive, it's not just being surrounded by it, but also being able to touch it
- Initial view: Overview, the zero state
	- Interaction => Rewards more knowledge
- For every interaction, ask "what is going to change?"
	- Every IA will prob affect multi parts of the screen
- MBostock made message signaling system in D3
	- D3.dispatch()

- atlas.on("state", fn())
- oculus.on("state", fn())
- First to hit "state" signal takes the signal & ends it

- Ex: http://cfinst.github.io

- 4 ways to interpret "this"

- Shirley's use of "this"
	- 1. On click for element that's clicked
	- 2. d3.select(this)

- MBostock "Let's Make a Map": https://bost.ocks.org/mike/map/
- MBostock "Command Line Cartography": https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c