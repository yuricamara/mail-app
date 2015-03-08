requirejs.config({
  paths: {
    "ajaxRequest" : "modules/ajax-request",
    "media" : "modules/media"
  }
});

require(['media'],function(media){
  'use strict';
  console.log(media.isDesktop());
});

require(['ajaxRequest'],function(mails){
  'use strict';
  //console.log('ajaxRequestResponse',mails);
});
