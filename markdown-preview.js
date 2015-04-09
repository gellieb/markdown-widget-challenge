"use strict";

var markdownPreviewProto = Object.create(HTMLElement.prototype);

markdownPreviewProto.attachedCallback = function(){
  this.h1 = document.getElementById('h1');
  this.convert = this.convert.bind(this);
  this.result = document.getElementById('result');
  this.convert();
}

markdownPreviewProto.convert = function(){
  console.log("HELLOOOO WE ARE HERE! HAPPY PANDA.");
  // this.result.innerHTML = this.h1.value;
  this.result.innerHTML = marked(this.h1.value)
};

document.registerElement('markdown-preview', {
  prototype: markdownPreviewProto
});
