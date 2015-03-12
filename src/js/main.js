requirejs.config({
  paths: {
    "ajaxRequest" : "modules/ajax-request",
    "media" : "modules/media",
    "hiddenAttribute":"modules/hiddenAttribute"
  },
  config: {
    "media":{
      "breakpoint":"940px"
    },
    "hiddenAttribute":{
      "smartphoneElementClass":"js-smartphone",
      "desktopElementClass": "js-desktop"
    }
  }
});


require(['hiddenAttribute'],function(hiddenAttribute){
  'use strict';
  hiddenAttribute();

  window.addEventListener('resize',function(){
    hiddenAttribute();
  });
});


require(['ajaxRequest'],function(mails){
  'use strict';
  //console.log('ajaxRequestResponse',mails);
});
