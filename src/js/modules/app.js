define(['shortMailCreation', 'mailListVisibilty'],function(createShortMailsString, mailListVisibilty){
  'use strict';

  var objApp = {

    showApp : function(){
      var loading = document.getElementById('loading-app'),
          app = document.getElementById('app');

      loading.setAttribute('hidden','');
      app.removeAttribute('hidden');
    },

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

  return function(){
    objApp
      .buildMailList();
    objApp
      .addClickListenerToLabels();

    objApp
      .showApp();
  };
});
