---
title: What are Cubic Bézier Curves?
description: The article “How to Create Complex Paths in SVGs” examined the <path> element and showed how to draw a series of lines and arcs to create any shape. (It’s often used to replicate fonts without requiring a full font download.)
authors: ['Craig-Butler']
card: true
date: Dec 8, 2022
tags: ['HTML-CSS']
---

You’ve possibly encountered cubic Bézier curves in desktop publishing and graphics packages. They define a start point (P0) and end point (P3). However, while quadratic curves use one control point, cubic Bézier curves have two: one for each end of the line (P1 and P2). [Wikipedia’s Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) page provides a good generation illustration:

<img src="/1478437631z1-01-300x169.png" style="margin-bottom: 3rem;"  alt="What are Cubic Bézier Curves?">

Cubic Bézier curves are defined using the C directive in the path’s d attribute:

```diff
  <path d="M100,250 C100,100 400,100 400,250" />
```


The initial M directive moves the pen to the first point (100,250). Three coordinates follow the C: the first control point (100,100), the second control point (400,100), and the final ending point (400,250).

You can also use a lowercase c to denote relative rather than absolute coordinates. The following curve would be identical and is possibly easier to code:

```diff
<path d="M100,250 c0,-150 300,-150 300,0" />
```



<p class="description">
Finally, there are shorthand S and s directives (as usual, the lowercase option denotes relative rather than absolute coordinates). These accept two further coordinates to string multiple curves together by setting another final point and its associated control point. The starting control point is assumed to be the same as the end control point on the previous curve. For example, take this path:
</p>

```diff
<path d="M100,250 C100,100 400,100 400,250 S700,400 700,250" />
```

It draws a curve from 100,250 (control point at 100,100) to 400,250 (control point at 400,100) as above. Another curve is then drawn from 400,250 (control point unchanged at 400,100) to 700,250 (control point at 700,400):
Cubic Bézier curves can be a little difficult to code and visualize, so this quick generation tool will generate the <path> code for you:

Drag the control points on either end of the curve accordingly. Click the curve itself to toggle a fill effect which adds an ending Z directive.

Note that this tool must convert DOM page coordinates to SVG coordinates to ensure it works at all screen sizes. This can be a little more complex than you expect, so refer to “How to Translate from DOM to SVG Coordinates and Back Again” for full details.

If you’d like a slightly easier option, try creating quadratic Bézier curves on SVG images.

Using SVGs is relatively straight forward — until you want to mix DOM and vector interactions.

SVGs have their own coordinate system defined in a viewBox attribute. For example:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" />

This sets a width of 800 units and a height of 600 units starting at 0,0. These units are arbitrary measurements for drawing purposes, and it’s possible to use fractions of a unit. If you position this SVG in an 800 by 600 pixel area, each SVG unit should map directly to a screen pixel.
However, vector images can be scaled to any size — especially in a responsive design. Your SVG could be scaled down to 400 by 300 or even stretched beyond recognition in a 10 by 1000 space. Adding further elements to this SVG becomes more difficult if you want to place them according to the cursor location.

Note: see Sara Soueidan’s [viewport, viewBox and preserveAspectRatio](https://sitepoint.com/viewport) article for more information about SVG coordinates.

  # Avoid Coordinate Translation

You may be able to avoid translating between coordinate systems entirely.

SVGs embedded in the HTML page (rather than an image or CSS background) become part of the DOM and can be manipulated in a similar way to other elements. For example, take a basic SVG with a single circle:

You can apply CSS effects to this:

```diff
circle {
  stroke-width: 5;
  stroke: #f00;
  fill: #ff0;
}

circle:hover {
  stroke: #090;
  fill: #fff;
}  
```

You can also attach event handlers to modify attributes:

```js
const mycircle = document.getElementById('mycircle');
mycircle.addEventListener('click', (e) => {
  console.log('circle clicked - enlarging');
  mycircle.setAttribute('r', 60);
});
```

The following example adds thirty random circles to an SVG image, applies a hover effect in CSS, and uses JavaScript to increase the radius by ten units when a circle is clicked.

  ## SVG to DOM Coordinate Translation

It may become necessary to overlay a DOM element on top of an SVG element — for example, a menu or information box on the active country shown on a world map. Presuming the SVG is embedded into the HTML, elements become part of the DOM, so the getBoundingClientRect() method can be used to extract the position and dimensions. (Open the console in the example above to reveal the clicked circle’s new attributes following a radius increase.)

Element.getBoundingClientRect() is supported in all browsers and returns an DOMrect object with the following properties in pixel dimensions:


- **x and .left: sx-coordinate**\
   relative to the viewport origin, of the left side of the element
 - **x and .top: y-coordinate**\
   relative to the viewport origin, of the right side of the element
  - **y and .top: y-coordinate**\
   relative to the viewport origin, of the top side of the element
- **bottom: y-coordinate**\
   relative to the viewport origin, of the bottom side of the element
- **.width: y-coordinate**\
   width of the element (not supported in IE8 and below but is identical to .right minus .left)
- **.height: height of the element**\
  (not supported in IE8 and below but is identical to .bottom minus .top)

You may be able to avoid translating between coordinate systems entirely.

SVGs embedded in the HTML page (rather than an image or CSS background) become part of the DOM and can be manipulated in a similar way to other elements. For example, take a basic SVG with a single circle:

- **Drag to edit**\
  Editing a date range is even easier now with the new drag-and-drop interface. Change `start` and `end` dates at will.
      <video autoplay muted loop playsinline width="1488" height="796">
        <source src="/1519001106bootstrap-card-component-300x200.mp4" type="video/mp4" />
      </video>
- **Range shortcuts**\
  (available from v6.0.0-beta.1)
  Add quick and customizable shortcuts for your users. Choose to display them on the left, right, bottom or top.
  <img src="/1519001106bootstrap-card-component-300x200.jpg"  style="margin-bottom: 3rem;" alt="Date Range shortcuts?">

You can apply CSS effects to this:



