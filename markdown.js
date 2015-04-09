var markdownPreviewProto = Object.create(HTMLElement.prototype);
markdownPreviewProto.attachedCallback = function(){
  this.current = this.firstElementChild;
  this.convert = this.convert.bind(this);
};
markdownPreviewProto.convert = function(){

}

document.registerElement('markdown-preview', {prototype: markdownPreviewProto})
