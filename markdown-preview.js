"use strict";

// class markdownPreview
var markdownPreviewProto = Object.create(HTMLElement.prototype);

markdownPreviewProto.attachedCallback = function(){
  this.h1 = document.getElementById('h1');
  this.convert = this.convert.bind(this);
  this.result = document.getElementById('result');
  var convertedText = this;
  this.convert();
  document.addEventListener("input", function(){
    convertedText.convert();
  });
}

markdownPreviewProto.convert = function(){
  this.result.innerHTML = marked(this.h1.value);
};

document.registerElement('markdown-preview', {
  prototype: markdownPreviewProto
});
