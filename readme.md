# Parsons CD web dev handbook
This website will host web development tutorials written by CD tutors and core interaction faculty to answer common questions and introduce students to best practices.


## Feature goals:
- [ ] General pages with best practices and resources
- [ ] Technical tutorials geared towards achieving specific effects that students often ask about
  - In each tutorial, include a set of tags for _“things you need to know in order to follow along“_ and _“functions that will be covered”_, ideally linking to other CD tutorials
- [ ] Collection of web development and UX readings
- [ ] CD tutor explanation and schedules/links (unlinkable and very hard to find in the [CD app](https://cdparsons.glideapp.io/))
- [ ] Fun home page

## Possible general pages:
- [ ] General best practices
  - Code indentation and formatting
  - HTML semantics
  - Breakpoints
  - Proper image sizing
- [ ] How to figure out how to do something
- [ ] Index of good learning resources / code encyclopedias
  - MDN
  - CanIUse
- [ ] Debugging
  - Introduction to the inspect tool and web console in browsers
  - *Note: this is a basic skill that I’ve noticed many students lack*
- [ ] CSS is more powerful than you think
  - Introduction to CSS variables and advanced selectors
- [ ] “Should I use a library?”
  - A guide for how to decide when to build something from scratch or use a library, maybe an index of common applications that are way simpler through a library.
- [ ] When and how to use code you find online
  - Explains why it’s usually bad to just copy code from places
    - a detriment to learning, defeats the whole point of the assignments
    - possibly plagiaristic
    - introduces dependencies to your code
    - may break things because you don’t understand it
  - Explains cases where it’s okay
    - Using a *library* to do something that would otherwise be really complicated (link to libraries page)
    - General open source culture
  - Alternatives:
    - Study the code of the site or tutorial that does what you want and try to figure it out, using the inspect tool if necessary
    - Ask for assistance from tutors and instructor
- [ ] Useful desktop software + choosing a code editor
- [ ] Getting a website live with Github pages
- [ ] Version control is your best friend
  - “Or how I fell in love with git branching”
- [ ] Advanced web development technology
  - Refers curious students to different types of development environments, explains when they’re useful to learn (and when not).
    - General Node/NPM
    - The JAMStack (e.g. Eleventy, Netlify) for static site generation
    - Angular or React for UX/SPAs
    - Powerful and common libraries like D3.js

## Possible tutorials:
- [ ] Drag and drop
  - Basic implementation using `onmousedown/move/up` (not the actual drag API, which is terrible)
  - Snapping, at which point a library will probably be advisable
- [ ] Audio effects
- [ ] Make page respond to screen size or device (media queries)
- [ ] Using APIs
  - Maybe include a list of good APIs
- [ ] Mouse events (make things happen when you click or hover)
  - Explain event listeners, and link to “Dynamically change page elements” for more detail on what can be done with them.
- [ ] Infinite carousels
  - will probably require a library
- [ ] Dynamically change/add page elements
  - Basic JavaScript DOM manipulation using `document.querySelector`, `document.createChild`,`document.style`,`document.innerText`, etc.
- [ ] Clear default styles on input elements
- [ ] How to set up a local server
  - Command line and possibly VSCode app




## Best practices for tutorials:
- Use titles that are explanatory for people who don’t know the right terminology
- List the things you need to know to understand the tutorial (hopefully using a built-in front-matter function)
- Rely on vanilla JS and CSS wherever possible. Encourage students to think through problems on their own.
- Describe code using non-technical language and make use of evocative metaphors to explain what things do.
- Be sure to follow good formatting conventions with your example code.
- Leave comments in example code to explain what each line does.


## How we envision the use of this site
- To be shared with students at the beginning of the semester as a general resource
- Instructors and tutors can refer students to the tutorials for common problems and mistakes
  - e.g. _“This guide shows you how to do this — read through it and let me know if you run into trouble.”_
  - These tutorials are supposed to be a kind of “Wirecutter” for navigating code as a designer and introducing the uninitiated to the right resources without the rest of the web's biases, ads, jargon, bad code, etc
- The site can also house general resources and reflect the core values of the program.
