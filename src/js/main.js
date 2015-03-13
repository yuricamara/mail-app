requirejs.config({
  paths: {
    //Modules
    "media" : "modules/media",
    "hiddenAttribute":"modules/hiddenAttribute",
    "shortMailCreation": "modules/shortMailCreation",
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
require(['shortMailCreation'],function(createShortMailsString){
  'use strict';

  var shortMailsString = createShortMailsString(),
      mailListEl = document.getElementById('mail-list');

  mailListEl.insertAdjacentHTML('beforeend',shortMailsString);

  //console.log(shortMailsString);

  require(['hiddenAttribute'],function(hideShowHiddenAttributes){
    hideShowHiddenAttributes();
    window.addEventListener('resize',function(){
      hideShowHiddenAttributes();
    });
  });
});
