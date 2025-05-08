---
title: Layout Projects to Help You Master Modern CSS
description: On this post you will be able to find out Insights from manual setup of React frameworks and Let's take some give aways to be more effective and well verses ..
authors: ['Ken-Beltran']
card: true
date: May 31, 2020
image:<img src="/1587003186vscode-extensions-300x170.png" width="120" height="120" style="margin-bottom: 3rem;" alt="profile-image" />
tags: ['CSS']
---

Many claim CSS is not a programming language. I agree — it’s tougher. A mastery of CSS requires skills in design, determination, inventiveness, experience, as well as coding (especially when using preprocessors such as Sass).

Starting with the easiest, the following project suggestions will help you on your journey to CSS mastery using books available at [SitePoint Premium](https://sitepoint.com/blogs).

# Make a Site Printer-friendly

<summary>
CSS suggests layouts and styles to the browser. A browser can interpret those suggestions whichever way it chooses and, even then, the user or device can ignore or override any properties. Creating high-performance code which works well across all devices and screen resolutions is a challenge that few attempt or successfully complete. However, the rewards can be exhilarating.

HTML pages are a continuous medium which do not necessarily work well on printed media. Inappropriate sections, scaling, text sizes, column dimensions, and missing or cropped content all lead to an inaccessible printing experience that few developers consider.
</summary>

```html
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>The HTML5 Herald</title>
  <meta name="description" content="The HTML5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

</head>

<body>
  <script src="js/scripts.js"></script>
</body>
</html>
```
<summary>
Fortunately, print CSS can be developed within a few hours. It’s generally a matter of resetting styles (black on white), removing unnecessary sections (menus, hero images, forms, social media widgets, etc.), linearizing the layout, and reducing the paper and ink requirements.
The most responsive and mostly used nowadays in layouting is the modular Grid layouts Many web pages are based on a grid-view, which means that the page is divided either columns: or rows: by convention/dimensions
</summary>

<details>
Prior to joining MUI, Damien worked in the finance industry in London for a decade. Part of the initial Agile Market team at RBS, and more recently leading a large Commodity Trading application at Adaptive, Damien has developed his React experience as part of large projects where Components driven design plays a huge role in successfully delivering applications. He loves TypeScript.
</details>


## 2. Apply Modern CSS Theming to an Existing Site

<ol><li class="feature-list">
A single color scheme is boring! Everyone expects a dark mode option in their OS and applications, so why not add one to your website?

Until recently, theme switchers typically required an additional set of styles with JavaScript-powered switching controls. However, modern browsers make life easier with CSS Custom Properties (variables) and the prefers-color-scheme @media rule.

Strategies for Theming (from New Frontiers In Web Design) provides a range of ideas and considerations when designing your new theme.

Applying CSS Conditionally (from CSS Master) describes how to define @media query rules including prefers-color-scheme.

Finally, Modern CSS: Adding a CSS Dark Theme (from Modern CSS) provides a full dark-theme-enabling tutorial.
</li></ol>


```diff

.menu {
    width: 25%;
    float: left;
}
.main {
    width: 75%;
    float: left;
}

```
<code class="description">
The example above is fine if the web page only contains two columns.
However, we want to use a responsive grid-view with 12 columns, to have more control over the web page.
First we must calculate the percentage for one column: 100% / 12 columns = 8.33%.
Then we make one class for each of the 12 columns, class="col-" and a number defining how many columns the section should span:
</code>

## 3. Make Your Site Faster
<summary>
the start of 2020, the average web page requires a 2MB download which takes 20 seconds to fully appear on an average mobile device. CSS accounts for 65KB spread over seven files. That may not seem significant, but stylesheet properties can make a difference.
Spend a few hours examining your existing site to determine whether it’s possible to replace or optimize images, fonts, and JavaScript effects with more efficient CSS. Your CSS code may grow, but overall weight will fall and performance will noticeably improve.
Testing Tools (from Jump Start Web Performance) and Debugging for UI Responsiveness (from CSS Master) explain how to use 

modern browser DevTools to assess performance and discover optimization targets.
Loading Assets on the Web (from New Frontiers In Web Design) describes how to use techniques such as critical CSS and progressive CSS loading to ensure stylesheets are loaded effectively. 20 Tips for Optimizing CSS Performance (from Modern CSS) provides a selection of practical tips.
Finally, Jump Start Web Performance contains dozens of quick, more intensive, and life-changing development suggestions to ensure your site remains fast for everyone.
</summary>

## 4. Start a New Project or CSS Component
<ul>
<li class="feature-list">
The project suggestions above can be used to improve an existing site, but there are no limitations or constraints when starting a new project from scratch. Options to consider:
</li>
</ul>


- **Build an online résumé. Bonus points for ensuring it’s responsive, prints well, and encoding all assets into a single HTML file which can be sent via email. (Tip: avoid adding JavaScript to ensure it won’t be blocked by email systems.)**

- **Build an interactive portfolio. A graphical list of all your sites with additional information when an item is clicked. A Grid layout is ideal but, if you really want a challenge, try a [masonry layout](https://pointsite/www.sitepoint.com/understanding-masonry-layout/index.html). (CSS Grid cannot implement this yet, but consider how it could be achieved using CSS columns or a vertically ordered Grid layouts.)**

- **Code a graphical design. Perhaps choose an attractive idea from [Dribbble](https://dribbble.com/shots/following/web-design) or a similar design community and code the HTML5 and CSS3. Bonus points for creating it without a framework or JavaScript!**

- **Create CSS-only Images. Create a set of useful icons powered by pseudo-elements and CSS shapes, or build an image using gradients and shadows.**

- **Experiment with SVG and CSS animations. Try creating attractive logos, charts, progress bars, activity spinners, and more.**


verge of releasing a new advanced component: the [Data Grid](https://dribbble.com/shots/following/web-design).

<img src="/css-1.jpg" style="margin-bottom: 3rem;" alt="profile-image" />


## Developer and browser tools:

- **[The DOM, CSS and Animations](https://pointsite/www.sitepoint.com/premium/books/browser-devtool-secrets/read/32acc?utm_source=blog&utm_medium=articles) (from [Browser DevTool Secrets](https://pointsite/www.sitepoint.com/premium/books/browser-devtool-secrets/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[How to Use Gulp.js to Automate Your CSS Tasks](https://pointsite/www.sitepoint.com/premium/books/css-tools-skills/read/12acc?utm_source=blog&utm_medium=articles) (from CSS: [Tools & Skills](https://pointsite/www.sitepoint.com/premium/books/css-tools-skills/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Jump Start Sass](https://pointsite/www.sitepoint.com/premium/books/jump-start-sass/index2acc.html?utm_source=blog&utm_medium=articles)**
- **[CSS Debugging and Optimization: Code Quality Tools](https://pointsite/www.sitepoint.com/premium/books/css-tools-skills/read/32acc?utm_source=blog&utm_medium=articles) (from CSS: [Tools & Skills](https://pointsite/www.sitepoint.com/premium/books/css-tools-skills/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[CSS Debugging and Optimization: Developer Tools](https://pointsite/www.sitepoint.com/premium/books/css-tools-skills/read/42acc?utm_source=blog&utm_medium=articles) (from CSS: [Tools & Skills](https://pointsite/www.sitepoint.com/premium/books/css-tools-skills/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Life-Changing Diets](https://pointsite/www.sitepoint.com/premium/books/jump-start-web-performance/read/52acc?utm_source=blog&utm_medium=articles) (from [Jump Start Web Performance](https://pointsite/www.sitepoint.com/premium/books/jump-start-web-performance/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Visual Studio Code: End-to-End Editing and Debugging Tools for Web Developers](https://pointsite/www.sitepoint.com/premium/books/visual-studio-code-end-to-end-editing-and-debugging-tools-for-web-developers/index2acc.html?utm_source=blog&utm_medium=articles)**


### CSS Grid ideas:

- **[Redesigning a Site to Use CSS Grid Layout](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/read/12acc?utm_source=blog&utm_medium=articles) (from [CSS Grid Layout](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Easy and Responsive Modern CSS Grid Layout](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/read/32acc?utm_source=blog&utm_medium=articles) (from [CSS Grid Layout](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Progressively Enhanced CSS Layouts from Floats to Flexbox to Grid](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/read/42acc?utm_source=blog&utm_medium=articles) (from [CSS Grid Layout](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Redesigning a Card-based Tumblr Layout with CSS Grid](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/read/22acc?utm_source=blog&utm_medium=articles) (from [CSS Grid Layout](https://pointsite/www.sitepoint.com/premium/books/css-grid-layout-5-practical-projects/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Better Responsive Structures with Grid Systems](https://pointsite/www.sitepoint.com/master-modern-css-projects/index.html) (from [Jump Start Responsive Web Design](https://pointsite/www.sitepoint.com/premium/books/jump-start-responsive-web-design-2nd-edition/index2acc.html?utm_source=blog&utm_medium=articles))**


### Responsive CSS techniques:

- **[14 Essential Responsive CSS Techniques](https://pointsite/www.sitepoint.com/premium/books/14-essential-responsive-css-techniques/index2acc.html?utm_source=blog&utm_medium=articles)**
- **[Responsive Design](https://pointsite/www.sitepoint.com/premium/books/responsive-design/index2acc.html?utm_source=blog&utm_medium=articles)**
- **[Jump Start Responsive Web Design](https://pointsite/www.sitepoint.com/premium/books/jump-start-responsive-web-design-2nd-edition/index2acc.html?utm_source=blog&utm_medium=articles)**


### CSS transitions and animations:

- **[CSS Animation 101](https://pointsite/www.sitepoint.com/premium/books/css-animation-101/read2acc?utm_source=blog&utm_medium=articles)**
- **[Transitions and Animations](https://pointsite/www.sitepoint.com/premium/books/css-master-2nd-edition/read/62acc?utm_source=blog&utm_medium=articles) (from [CSS Master)](https://pointsite/www.sitepoint.com/premium/books/modern-css/index2acc.html?utm_source=blog&utm_medium=articles)**
-  **[Using CSS Transforms in the Real World](https://pointsite/www.sitepoint.com/premium/books/modern-css/read/12acc?utm_source=blog&utm_medium=articles) (from [Modern CSS)](https://pointsite/www.sitepoint.com/premium/books/modern-css/index2acc.html?utm_source=blog&utm_medium=articles)**


### Combining CSS with SVG:

- **[Animating SVG](https://pointsite/www.sitepoint.com/premium/books/practical-svg/read/72acc?utm_source=blog&utm_medium=articles) (from [Practical SVG](https://pointsite/www.sitepoint.com/premium/books/practical-svg/index2acc.html?utm_source=blog&utm_medium=articles)]**
- **[Using CSS with SVG](https://pointsite/www.sitepoint.com/premium/books/css-master-2nd-edition/read/92acc?utm_source=blog&utm_medium=articles) (from [CSS Master](https://pointsite/www.sitepoint.com/premium/books/css-master-2nd-edition/index2acc.html?utm_source=blog&utm_medium=articles))**
- **[Real World Use of CSS with SVG](https://pointsite/www.sitepoint.com/premium/books/modern-css/read/42acc?utm_source=blog&utm_medium=articles) (from [modern CSS](https://pointsite/www.sitepoint.com/premium/books/modern-css/index2acc.html?utm_source=blog&utm_medium=articles))**

### Now stop reading and get coding!