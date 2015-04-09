"use strict";

// class markdownPreview
var markdownPreviewProto = Object.create(HTMLElement.prototype);

markdownPreviewProto.attachedCallback = function(){
  this.marked = document.getElementById('marked-textarea');
  this.convert = this.convert.bind(this);
  this.result = document.getElementById('result');
  var convertedText = this;
  this.convert();
  document.addEventListener("input", function(){
    convertedText.convert();
  });
}

markdownPreviewProto.convert = function(){
  this.result.innerHTML = marked(this.marked.value);
};

document.registerElement('markdown-preview', {
  prototype: markdownPreviewProto
});
