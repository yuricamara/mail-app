define(['module'],function(module){
  'use strict';

  var breakpointTablet = module.config().breakpointTablet,
      breakpointTabletDesktop = module.config().breakpointTabletDesktop,
      breakpointDesktop = module.config().breakpointDesktop;

  var isTablet = function(){
    var tabletSize = window.matchMedia('(min-width:'+breakpointTablet+') and (max-width:'+breakpointTabletDesktop+')');

    if(tabletSize.matches){
      return true;
    }else{
      return false;
    }
  };

  var isDesktop = function(){
    var desktopSize = window.matchMedia('(min-width:'+breakpointDesktop+')');

    if(desktopSize.matches){
      return true;
    }else{
      return false;
    }
  };

  var isSmartphone = function(){
    return !isDesktop() && !isTablet();
  };

  return{
    isDesktop : isDesktop,
    isTablet : isTablet,
    isSmartphone : isSmartphone
  };
});
