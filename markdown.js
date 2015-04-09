"use strict";

var markdownProto = Object.create(HTMLElement.prototype);

markdownProto.attachedCallback = function(){
  var formId = this.getAttribute("for");
  this.convert = this.convert.bind(this);
  this.convert(formId);
};

markdownProto.convert = function(formId){
  //console.log($("#" + formId));
  $("#" + formId).on("change", function() {
    console.log(this);
    //this.innerHTML = marked($("#" + formId).val());
    $("#update").html(marked($(this).val()));
  });
  //this.innerHTML = $("#" + formId).val();
//  setTimeout(this.convert(formId), 2);
};


document.registerElement('markdown-preview', {prototype: markdownProto});
