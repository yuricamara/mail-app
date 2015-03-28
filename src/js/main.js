requirejs.config({
  paths: {
    //Modules
    app: 'modules/app',
    datesHandling: 'modules/datesHandling',
    mailInfosFromJSON: 'modules/mailInfosFromJSON',
    mailListVisibilty: 'modules/mailListVisibilty',
    mailOpenedControl: 'modules/mailOpenedControl',
    mailCreation: 'modules/mailCreation',

    //Templates
    openedMail: 'templates/opened-mail.html',
    shortMail: 'templates/short-mail.html',

    //Plugins
    text:'../vendors/bower_components/text/text'
  }
});

require(['app'],function(app){
  'use strict';

  app();
});


