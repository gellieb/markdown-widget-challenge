"use strict";

$( document ).ready(function() {
  // var x = $('#text-to-convert').val();
  // console.log(x);
/*
<generic tag that no one ever uses by itself>
<html> = standard html tag
<ryan-sam-tag></ryan-sam-tag>

Making a custom HTML Tag
Step 1. We have to Construct a Prototype that comes from HTMLElement
        In this step we make a function.
*/

/*  Line 6 creates a new object of HTMLElement, a contructor function,
    with it's prototype methods */
// $('#text-to-convert').val()


var newHTMLTag = Object.create(HTMLElement.prototype);

/* This will give the tag a specific action and make it special*/
newHTMLTag.createdCallback = function() {
  this.current = this.lastElementChild.value;
  this.changeText = this.changeText.bind(this);
  this.changeText();
};

newHTMLTag.changeText = function() {

  $('#converted-text').html(marked($('#text-to-convert').val()));
  setTimeout(this.changeText, this.delay * 1 || 50);
};

var MyElement = document.registerElement('ryan-sam-tag', {prototype: newHTMLTag});








});
