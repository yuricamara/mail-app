define(['media','module'],function(media,module){
  'use strict';

  var desktopEls = document.getElementsByClassName(module.config().desktopElementClass),
      smartphoneEls = document.getElementsByClassName(module.config().smartphoneElementClass);

  return function(){
    var i = 0, l = 0;

    if(media.isDesktop()){

      for(i = 0, l = desktopEls.length;i<l;i++){
        desktopEls[i].removeAttribute('hidden');
      }

      for(i = 0, l = smartphoneEls.length;i<l;i++){
        smartphoneEls[i].setAttribute('hidden','');
      }
    }else{

      for(i = 0, l = smartphoneEls.length;i<l;i++){
        smartphoneEls[i].removeAttribute('hidden');
      }

      for(i = 0, l = desktopEls.length;i<l;i++){
        desktopEls[i].setAttribute('hidden','');
      }
    }
  };
});
