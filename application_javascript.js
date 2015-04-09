$(document).ready(function({


test = $('#test').appendTo('markdown-preview');




}))
var htmlElement = Object.create(HTMLElement.prototype);

htmlElement.createdCallback = function() {
  this.innerHTML = "<b>This is a markup!</b>";
};

htmlElement.attachedCallback = function()

var first_element = document.registerElement('markdown-preview', {prototype: htmlElement});
// document.body.appendChild(new first_element());

