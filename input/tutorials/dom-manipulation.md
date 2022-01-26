---
title: Dynamically change/add page elements
---

This tutorial will go over the basics of how to change the content and styling of page elements in your documents, using JavaScript (JS).

Recommended before you begin:
- Basic HTML
- Basic CSS
- Basic JavaScript syntax
- JavaScript functions

Functions covered:
- document.querySelector()
- document.querySelectorAll()
- element.forEach()
- element.style
- element.classList and related
- element.innerText
- document.createChild() and related




## How to select an element in JavaScript

In JS, you can use a [variable](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables) as a reference to an element in your HTML. There are several ways to do this, but the most general purpose is `document.querySelector`. This function uses CSS selectors as parameters to find an element.

    //target an <h1> element
    const title_element = document.querySelector("h1");

    // target an element with id="close-button"
    const close_button = document.querySelector("#close-button");

Once you have this variable created, you can use JS to change things about the element. See the following sections.

*(for reference: the thing now stored in this variable is called a “node”, and it is structured like a javascript object)*

## Change the text content of an element

You can change the text content by adding `.innerText =`  after your variable and inputting the new text in quotations.

    title_element.innerText = "Hello world!"

## Change the CSS styles on an element

The CSS styles of an element through the `.style` key. From there you can access different styles by their CSS property name, except in camel case instead of hyphens.


    // Sets text color (the "color:" property in CSS)
    title_element.style.color = "blue";

    // Sets top margin ("margin-top" property in CSS)
    title_element.style.marginTop="100px";

*For reference: the changes will be added to the style attribute in the HTML, e.g.* `<h1 style="color:blue;">hello world</h1>`


## Add or remove classes from elements

You can access an element’s CSS classes through the `.classList` key, and add or remove them.


    // adds class "big" to the element
    title_element.classList.add("big")

    // removes class "hidden" from element
    title_element.classList.remove("ugly")

    // handy "toggle" that adds class if it's off, and removes it if it's on
    title_element.classList.toggle("visible")


This is usually preferable to changing the styles directly, because you can just do all your CSS in a centralized place and have more control over it through classes.


## Select and change multiple elements

In order to select multiple elements, you’ll need to use a slightly different JavaScript function called `document.querySelectorAll`.


    const elements=document.querySelectorAll(".el")

This will find all the elements in your document that have the CSS selector you entered, and save them in a list which is similar to an array.

Now how do you do stuff in JS with these elements? One easy way to change all of them is the `forEach` function, which is a type of [looping function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration).


    elements.forEach((item)=>{
      item.style.color="Blue";
    })


The syntax may look intimidating, but what it does is simple enough. In the example above, the code instructs the computer: **"For each item in this collection of elements, change its color to blue”**.

It doesn’t matter what you call “item” in the example above. It’s just a placeholder name for each single item in your collection of elements, so you can tell the computer what you want it to change.


## Create a new element and add it to the document

Using the techniques we’ve learned above and some new functions, we can generate elements in JavaScript and add them to the page on the fly.

You’ll just need two new functions: `document.createElement`, which generates a new element in JavaScript but doesn’t actually add it anywhere, and `element.appendChild`, which adds it to a document, within an element of your choice.


    //lets say you have this existing element in the dom
    const container=document.querySelector("div");

    //now you want to add a paragraph to it. Here's what you do:

    // 1. create the element.
    // enter a type of HTML element in quotations, (e.g. p, h1, h2, h3, div, li)
    const newParagraph=document.createElement("p");

    // 2. you can adjust things about the element before you add it to the document.
    newParagraph.style.color="Green";
    newParagraph.innerText="I am a green paragraph tag";

    // 3. finally, select the container and add the new paragraph to it using appendChild
    container.appendChild(newParagraph);
