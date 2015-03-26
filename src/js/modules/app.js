define(['shortMailCreation', 'mailListVisibilty'],function(createShortMailsString, mailListVisibilty){
  'use strict';

  var objApp = {

    buildMailList : function(){

      var mailListEl = document.getElementById('mail-list');

      mailListEl.innerHTML = createShortMailsString();

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
        mailListVisibilty(labels[i]);
      }
    }
  };

  var execApp = function(){
    objApp
      .buildMailList();
    objApp
      .addClickListenerToLabels();
  };

  return execApp;
});
