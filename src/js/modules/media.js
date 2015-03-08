define(function(){
  'use strict';

  var isDesktop = function(){
    var desktopSize = window.matchMedia('(min-width:940px)');

    if(desktopSize.matches){
      return true;
    }else{
      return false;
    }
  };

  return{
    isDesktop : isDesktop
  };
});
