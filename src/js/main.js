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
    text:'../vendors/bower_components/text/text'
  }
});

require(['app'],function(app){
  'use strict';

  app();
});


