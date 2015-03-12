requirejs.config({
  paths: {
    //Modules
    "media" : "modules/media",
    "hiddenAttribute":"modules/hiddenAttribute",
    //Templates
    "short-mail": "templates/short-mail.html",
    //Plugins
    "text":"plugins/text"

  },
  config: {
    "media":{
      "breakpoint":"60em"
    },
    "hiddenAttribute":{
      "smartphoneElementClass":"js-smartphone",
      "desktopElementClass": "js-desktop"
    }
  }
});


//Short Mails
require(['text!short-mail','text!mails.json','hiddenAttribute'],function(shortMailTpl,mails,hiddenAttribute){
  'use strict';
  console.log(shortMailTpl);
  console.log(JSON.parse('['+mails+']'));

  hiddenAttribute();

  window.addEventListener('resize',function(){
    hiddenAttribute();
  });
});
