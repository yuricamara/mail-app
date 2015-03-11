requirejs.config({
  paths: {
    "ajaxRequest" : "modules/ajax-request",
    "media" : "modules/media"
  },
  config: {
    "media":{
      "breakpoint":"940px"
    }
  }
});

require(['media'],function(media){
  'use strict';

  var hiddenSmartphoneEls = document.getElementsByClassName('js-hidden-smartphone'),
      hiddenDesktopEls = document.getElementsByClassName('js-hidden-desktop');

  var actionsRelatedToMedia = function(){
    var i = 0, l = 0;

    if(media.isDesktop()){

      for(i = 0, l = hiddenSmartphoneEls.length;i<l;i++){
        hiddenSmartphoneEls[i].removeAttribute('hidden');
      }

      for(i = 0, l = hiddenDesktopEls.length;i<l;i++){
        hiddenDesktopEls[i].setAttribute('hidden','');
      }
    }else{

      for(i = 0, l = hiddenDesktopEls.length;i<l;i++){
        hiddenDesktopEls[i].removeAttribute('hidden');
      }

      for(i = 0, l = hiddenSmartphoneEls.length;i<l;i++){
        hiddenSmartphoneEls[i].setAttribute('hidden','');
      }
    }
  };

  actionsRelatedToMedia();

  window.addEventListener('resize',function(){
    actionsRelatedToMedia();
  });
});

require(['ajaxRequest'],function(mails){
  'use strict';
  //console.log('ajaxRequestResponse',mails);
});
