requirejs.config({
  paths: {
    //Modules
    app: 'modules/app',
    date: 'modules/date',
    mailListVisibilty: 'modules/mailListVisibilty',
    shortMailCreation: 'modules/shortMailCreation',

    //Templates
    shortMail: 'templates/short-mail.html',

    //Plugins
    text:'plugins/text'
  }
});

require(['app'],function(app){
  'use strict';

  app();
});


