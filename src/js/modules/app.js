define([
  'mailCreation',
  'mailOpenedControl',
  'mailListVisibilty'
],
function(mdlMailCreation, mdlMailOpenedControl, mdlMailListVisibilty){
  'use strict';

  var objApp = {

    showApp : function(){
      var elLoading = document.getElementById('loading-app'),
          elApp = document.getElementById('app');

      elLoading.setAttribute('hidden','');
      elApp.removeAttribute('hidden');
    },

    buildMailList : function(){

      var elMailList = document.getElementById('mail-list');

      elMailList.innerHTML = mdlMailCreation.createShortMails();

    },

    addClickListenerToLabels: function(){

      var labels = [
          'clients',
          'family',
          'friends',
          'social'
        ],
        i = 0,
        l = labels.length;

      for(i,l; i < l; i++){
        mdlMailListVisibilty(labels[i]);
      }
    },

    addClickListenerToMailList : function(){
      mdlMailOpenedControl.addClickListeners();
    }

  };

  return function(){
    objApp
      .buildMailList();
    objApp
      .addClickListenerToLabels();
    objApp
      .addClickListenerToMailList();
    objApp
      .showApp();
  };
});
