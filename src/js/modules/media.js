define(['module'],function(module){
  'use strict';

  var breakpoint = module.config().breakpoint;

  var isDesktop = function(){
    var desktopSize = window.matchMedia('(min-width:'+breakpoint+')');

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
