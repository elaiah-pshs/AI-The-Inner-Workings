# AI: The Inner Workings

## Table Of Contents

* [Website Description](#description)
* [Code Explaination](#explaination)
* [Code Accreditation](#code-credits)

<br>
<br>

<h2 id="description"> Description </h2>

**AI: The Inner Workings** is a website about Artificial Intelligence, its uses, how it is made, and the myths surrounding it. This website contains everything from:

1. A comprehensive introduction about AI.

2. A series of pages dedicated to how an AI is made

3. A collection of pages explaining the applications of AI in the real world

4. A mythbusters-type minigame related to some common myths about AI

<br>
<br>

<h2 id="explaination"> Code Explaination </h2>

This section contains all the explainations for each line of code I used in this whole project that has not been and will not be discussed in Computer Science 3.

<br>

### 1. Markdowns
Let us start with something simple: this file itself. The file you are reading right now is known as a markdown file. It has a file extension of `.md`, and, put simply, a markdown file is just a text file with some extra styles, seeing as the output you are seeing right now has titles, paragraphs, headings, links, and so on.

There is a lot more to mardkown files, but I do not have enough time or space to talk more about this topic. If you want to learn more, I would suggest [this](http://nestacms.com/docs/creating-content/markdown-cheat-sheet) website, which lists down some ways to format your text in a markdown file.

<br>

### 2. CSS `@import` Rule
```css
@import "navbar.css";
@import "title.css";
@import "footer.css";
```
The CSS `@import` rule allows you to import a stylesheet into another stylesheet. In this website, I used it to compartmentalize my CSS code into multiple files in order to make code navigation and maintainance way easier.

<br>

### 3. Root Pseudo-class
```css
:root {
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
}
```
The `:root` pseudo-class is a CSS pseudo-class that points to the root element of an HTML document, otherwise known as the `<html>` element.

<br>

### 4. CSS Variables
```css
--text-primary: rgb(182, 182, 182);
--text-secondary: rgb(236, 236, 236);
--bg-primary: rgb(9, 73, 120);
--bg-secondary: rgb(6, 50, 81);
--transition-speed: 500ms;
```
CSS variables are properties that store a CSS value. Once declared, they will not affect the website in any way. The values stored in these variables can be accessed using the var() function, and they will work like normal values once accesed.

<br>

### 5. CSS Relative Units
```css
margin-left: 5%
margin-right: 5rem;
width: 100vw;
height: 50vh;
```
CSS relative units are units whose values are not fixed, and are instead relative to a certain value in the document. The relative units I used in this site are listed above.

* The `%` unit is a unit relative to the parent value of the property it is declared in. For example, if the `margin-left` of the parent element is 100px, then the element which has the styles above will have a `margin-left` of 5px.

* The `rem` unit is a unit relative to the `font-size` property of the root element. In other words, if we have `:root { font-size: 16px; }`, then `1rem` is equal to `16px`, and `5rem` is equal to `80px`.

* The `vw` and `vh` are units relative to the 1% of the viewport's (the browser window) width and height, respectively. `10vw` is 10% of the viewport width, and `100vh` is 100% of the viewport height.

There are a lot more relative units out there, but there are too many to list down. In the meantime, I would recomment [this](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) website if you want to do some further reading on this topic.

<br>

### 6. CSS `calc()` Function
```css
hr {
    width: calc(100% - 200px);
}
```
The CSS `calc()` function allows CSS to basically do math. You can use it to add values even of different units. In the exxample above, the hr element will have a width `200px` less than that of the parent element. Since `<hr>` elements are automatically center-aligned, the resulting display would be a horizontal line with a seemingly `100px` left and right margin, like what you saw in this website.

<br>

### 7. CSS `border-radius` Property
```css
hr {
    border-radius: 3px;
}
```
The CSS `border-radius` property curves the borders of an HTML element. The pixel value this property takes in represents the radius of the semicircles that will replace the corners of the element being targeted.

<br>

### 8. CSS `transition` Property
```css
main a:link, main a:visited {
    transition: color var(--transition-speed) ease;
}
```
The CSS `transition` property allows CSS properties to transition from one value to another. In the example above, the first value, `color` determines the property to be animated. `var(--transition-speed) `, the second value, is the speed of the animation. This value is stored in the `--transition-speed` variable, and is being accessed using the `var()` function. Finally, the third value, `ease`, determines how the animation flows. `ease` simply means that the animation will start slow, then speed up a little bit, then end slow again.

There are a lot more ways to use this property than the one I showcased, but then again, there is not enough space to list all of them down. I would recommend [this](https://www.w3schools.com/css/css3_transitions.asp) website by W3Schools if you want to learn more.

<br>

### 9. Pseudo-elements
```css
body::-webkit-scrollbar {
    width: 0.5rem;
}

body::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
}

body::-webkit-scrollbar-thumb {
    background-color: var(--bg-primary);
    border-radius: 0.25rem;
}
```
The targets of the three examples above are examples of pseudo-elements. Basically, pseudo-elements are elements that are not explicitly stated in the HTML document you wrote. An example would be the scrollbar. The three pseudo-elements being targeted above are the scrollbar (as a whole), the scrollbar track (the background of the scrollbar), and the scrollbar thumb (the darker part of the scrollbar that indicates how far the user has scrolled).

There are many more pseudo-elements out there. Here is a [list](https://www.w3schools.com/css/css_pseudo_elements.asp) of some more of them, care of W3Schools.

### 10. CSS Media Queries
```css
@media only screen and (max-width: 640px) {
    .navbar {
        bottom: 0;
        width: 100vw;
        height: 5rem;
    }

    .logo {
        display: none;
    }

    .navbar-nav {
        flex-direction: row;
    }

    .nav-link {
        justify-content: center;
    }
}
```
CSS media quesries, represented by CSS rules starting with `@media`, are CSS rules that allow for a sort-of "conditional styling". In other words, it allows you to create CSS styles that only apply when certain conditions are met. Usually, these conditions are the ones that cannot be handeled by a pseudo-class. For example, you can use media queries to rearrange your content in smaller screens, just like what I did to the navigation bar in `./css/navbar.css`.

In the example above, the styles in the media query will only be applied when the screen (or viewport) has a maximum width of `640px`. In other words, these styles will only apply to small screens. If you want to know more about media queries, I would recommend [this](https://www.w3schools.com/cssref/css3_pr_mediaquery.asp) website, again, from W3Schools.

<br>

### 11. CSS Minimum and Maximum Properties
```css
.nav-link img {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;
}
```
There are CSS properties out there that allow you to set the minimum and maximum values of certain properties. In the example above, the style sets the minimum wisth of the navigation bar icons to `2rem`, or, in the case of this website, `48px`. Then again, there is a lot more to these properties. I would recommend [this](https://ishadeed.com/article/min-max-css/) article by Ahmad Shadeed.

<br>

### 12. CSS `:last-child` Pseudo-class
```css
.nav-item:last-child {
    margin-top: auto;
}
```
The CSS `:last-child` Pseudo-class points to the last child of an element. In the example above (from `./css/navbar.css3`), the pseudo-class is used to put the last element of the navigation bar, the link to the sources site, at the very bottom of the viewport.

<br>
<br>

<h2 id="code-credits">Code Accreditation</h2>

* The navigation bar used in this website was heavily inspired by the work of Jeff Delaney on this github repository:
    * [A Responsive Animated CSS Icon Navbar](https://github.com/fireship-io/222-responsive-icon-nav-css)