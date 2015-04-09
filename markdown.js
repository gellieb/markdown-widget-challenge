var markdownProto = Object.create(HTMLElement.prototype);

markdownProto.attachedCallback = function(){
  var formId = this.getAttribute("for");
  this.convert(formId);
};

markdownProto.convert = function(formId){


};


document.registerElement('markdown-preview', {prototype: markdownProto});
