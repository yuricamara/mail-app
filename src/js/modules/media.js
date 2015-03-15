/**
 * Says which is the media type of the user using media query
 * @returns {object} Object with methods saying if the media is or not of a determined type.
 */

define(['module'],function(module){
  'use strict';

  var breakpointTablet = module.config().breakpointTablet,
      breakpointTabletDesktop = module.config().breakpointTabletDesktop,
      breakpointDesktop = module.config().breakpointDesktop;

  /**
   * Verify if the media has size of a tablet screen using media query.
   * @returns {Boolean} True if the media has size of a tablet screen or false if it doesn´t.
   */

  var isTablet = function(){
    var tabletSize = window.matchMedia('(min-width:'+breakpointTablet+') and (max-width:'+breakpointTabletDesktop+')');

    if(tabletSize.matches){
      return true;
    }else{
      return false;
    }
  };


  /**
   * Verify if the media has size of a desktop screen using media query.
   * @returns {Boolean} True if the media has size of a desktop screen or false if it doesn´t.
   */


  var isDesktop = function(){
    var desktopSize = window.matchMedia('(min-width:'+breakpointDesktop+')');

    if(desktopSize.matches){
      return true;
    }else{
      return false;
    }
  };

  /**
   * Verify if the media has size of a smartphone screen using media query
   * @returns {Boolean} True if the media has size of a smartphone screen or false if it doesn´t.
   */

  var isSmartphone = function(){
    return !isDesktop() && !isTablet();
  };

  return{
    isDesktop : isDesktop,
    isTablet : isTablet,
    isSmartphone : isSmartphone
  };
});
