# Markdown Widget Challenge

## Learning Competencies

* Use basic JavaScript - functions, control structures, scope
* Build a pure JavaScript application
* Build a pure JavaScript class
* Write OO JavaScript
* Write modular views in JS

## Summary

Let's create a markdown preview widget. It should work like this:

    <markdown-preview for="src"></markdown-preview>
    <textarea id="src"></textarea>  

When we're done, the `<markdown-preview>` element will show a live preview
of the source in the element identifed by its `for` attribute (the
`textarea`, in this case).

When we change the content of the text area, the preview element will update.

## Review — Defining a tag

Custom elements are still a bit new, so there isn't a great
deal of documentation. Fortunately, the API is relatively
straightforward.

[Here][custom elements] is a thorough, if rather breathless, description of
[custom elements][].

A brief overview:

    // Your prototype's prototype will be the element you
    // want to extend. The simplest case is to extend HTMLElement.
    var myElementProto = Object.create(HTMLElement.prototype);

    // You get these lifecycle callbacks:
    //   createdCallback()
    //   attachedCallback()
    //   attributeChangedCallback(attrName, oldVal, newVal)
    //   detachedCallback()
    //
    // If they are defined, the browser will call these functions
    // when your element is created, attached to the page, detached
    // from the page, or has an attribute modified.
    //
    // You define them on the prototype like so:
    myElementProto.attachedCallback = function() {
      this.textContent = "I'm on the page! Wheeee!";
    };

    // You can define whatever other functions you want on your
    // element's prototype.
    myElementProto.fuchsiafy = function() {
      this.style.backgroundColor = 'fuchsia';
    };

    // document.registerElement returns a constructor, though
    // you probably won't need to call it directly in this challenge.
    var MyElement = document.registerElement('my-element', {prototype: myElementProto});


## Releases

### Release 0 — Dead Preview

Define a `<markdown-preview>` element with
[`document.registerElement`](http://www.html5rocks.com/en/tutorials/webcomponents/customelements/).

[When your element is attached to the page][lifecycle callbacks], have it find the element selected by
its `for` attribute and copy that element's content into itself. Don't worry about
parsing the markdown just yet.

### Release 1 — Pining for the Fjords Preview

Parsing Markdown is a fairly substantial task on its own. Grab a
[markdown library][marked]. (I don't know if that's the best one, but it looks
like it has a nice interface and supports GitHub flavored markdown).

Using the markdown library, convert the content of the markdown element to
HTML before displaying it.

### Release 2 — Live Preview

Have your widget set up the
[appropriate event listeners](https://developer.mozilla.org/en-US/docs/Web/Events/input)
to update itself when the contents of its source element change.

It's good practice to
[remove](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
(or switch [off](https://api.jquery.com/off/)) any event listeners you attach once you no
longer need them. The element's lifecycle callbacks provide a convenient place to do
this.

Not doing so can create [memory leaks][].

### Release 3 — Stretch: Preview a file

Add support for an `src` attribute on your custom element. This attribute should
take a URL with markdown content and display it. Your Javascript code will need to issue an HTTP request for the `src` URL.

## Optimize your learning

It's often helpful to focus on the flow of data through your program before
you work out precisely how you want to transform it. In this case, we
first set up a widget that used [identity transform][identity] to confirm that
we could read something—*anything*—from one part of the page and insert it
into another.

## Resources

* [custom elements][]
* [lifecycle callbacks][]
* [marked][]
* [Identity transformation][identity]
* [optimizing Javascript][memory leaks]

[custom elements]: http://www.html5rocks.com/en/tutorials/webcomponents/customelements/
[lifecycle callbacks]: http://www.html5rocks.com/en/tutorials/webcomponents/customelements/#lifecycle
[marked]: https://github.com/chjj/marked
[identity]: http://en.wikipedia.org/wiki/Identity_transform
[memory leaks]: https://developers.google.com/speed/articles/optimizing-javascript
