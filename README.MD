# AI: The Inner Workings

<h2 id="description"> Description </h2>

**AI: The Inner Workings** is a website about Artificial Intelligence, its uses, how it is made, and the myths surrounding it. This website contains everything from:

1. A comprehensive introduction about AI.

2. A series of pages dedicated to how an AI is made

3. A collection of pages explaining the applications of AI in the real world

4. A mythbusters-type minigame related to some common myths about AI

Check out the explainations to all the code used in this website that you might not be familiar with in the `wiki` section. Also, feel free to point out any issues with the website in the `issues` section! I'm not so strict on Github conventions (because for the most part I don't even follow them HAHAHAHA), so don't be shy.

<br>
<br>

<h2 id="code-credits">Code Accreditation</h2>

* The navigation bar used in this website was heavily inspired by the work of Jeff Delaney on this Github repository:
    * [A Responsive Animated CSS Icon Navbar](https://github.com/fireship-io/222-responsive-icon-nav-css)

* The code for hiding scrollbars while still maintaining the website's ability to scroll was taken from this Stackoverflow question posted Oussama el Bachiri
    * [Hide scroll bar, but while still being able to scroll](https://stackoverflow.com/questions/16670931/hide-scroll-bar-but-while-still-being-able-to-scroll?page=1&tab=votes#answer-38994837)

* The code for the card system right after each title is also inspired by the work of Jeff Dalaney on this Github repository:
    * [Stacked Card List](https://github.com/fireship-io/stacked-card-list)

* The flipping cards found in the myths page contains code from Jacob Oakley on this Codepen:
    * [Card Flip](https://codepen.io/jacoboakley/pen/ZpRbqB?editors=0010)


## Planned Changes
1. We will add a quiz at the end of the website to test how much the reader learned from reading through the website
    * The quiz can be accessed from the end of the uses page
    * When the user clicks on the link, they will be directed to a site that briefs them about the quiz.
    * When the user clicks the start button, they will be redirected to the page containing the quiz.
    * The quiz will have 10 multiple choice questions which will be randomly selected from a set of 42 multiple choice questions.
    * After submitting, the user will see their score and the correct answers to all the items in the quiz.
    * The user will also see their scores from previous attempts. They will also be able to compare their old answers to their new answers side by side.
    * The user will be given links to the topics of the questions asked to them.
    * Finally, there will be a button to go back to the home page.
2. We will improve the myths page by:
    * Removing the card flipping feature (this is a massive accessibility issue)
    * Changing the content section to a true or false type quiz 
3. We will improve the accessibility of the website by adding:
    * An option to enable/disable animations
    * An option to switch between light/dark mode
    * `:focus` styles for keyboard navigators and readers using mobile devices
    * A "skip to content" button for keyboard navigators
4. If we have time, we will add parallax scrolling and a 3d animated background (most likely implemented via three.js)
