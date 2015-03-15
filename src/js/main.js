requirejs.config({
  paths: {
    //Modules
    media : 'modules/media',
    date: 'modules/date',
    shortMailCreation: 'modules/shortMailCreation',
    //Templates
    shortMail: 'templates/short-mail.html',
    //Plugins
    text:'plugins/text'

  },
  config: {
    media:{
      breakpointTablet:'30em',
      breakpointTabletDesktop:'59.99em',
      breakpointDesktop:'60em'
    }
  }
});


//Short Mails
require(['shortMailCreation'],function(createShortMailsString){
  'use strict';

  var shortMailsString = createShortMailsString(),
      mailListEl = document.getElementById('mail-list');

  mailListEl.innerHTML = shortMailsString;

});
