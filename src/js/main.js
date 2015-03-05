requirejs.config({
  paths: {
    "ajaxRequest" : "ajax-request"
  }
});

require(['ajaxRequest'],function(mails){
  console.log('ajaxRequestResponse',mails);
});
