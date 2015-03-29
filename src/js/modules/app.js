define([
  'mailCreation',
  'mailOpenedControl',
  'mailListVisibilty',
  'mailInfosFromJSON'
],
function(mdlMailCreation, mdlMailOpenedControl, mdlMailListVisibilty, MdlMailInfosFromJson){
  'use strict';

  var objApp = {

    storeMailsJSON: function(mailsJSON){
      MdlMailInfosFromJson.mailsJSONArray = JSON.parse('['+mailsJSON+']');
    },

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

    var ajaxRequest = new XMLHttpRequest();

    ajaxRequest.open('GET', '/mails.json');

    ajaxRequest.onreadystatechange = function(){
      if(ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
        var mailsJSON = ajaxRequest.responseText;

        objApp
          .storeMailsJSON(mailsJSON);
        objApp
          .buildMailList();
        objApp
          .addClickListenerToLabels();
        objApp
          .addClickListenerToMailList();
        objApp
          .showApp();
      }
    }

    ajaxRequest.send(null);

  };
});
