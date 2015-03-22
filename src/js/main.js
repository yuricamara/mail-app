requirejs.config({
  paths: {
    //Modules
    date: 'modules/date',
    shortMailCreation: 'modules/shortMailCreation',
    mailListVisibilty: 'modules/mailListVisibilty',
    //Templates
    shortMail: 'templates/short-mail.html',
    //Plugins
    text:'plugins/text'

  }
});


//Short Mails
require(['shortMailCreation', 'mailListVisibilty'],function(createShortMailsString, mailListVisibilty){
  'use strict';

  var shortMailsString = createShortMailsString(),
      mailListEl = document.getElementById('mail-list'),
      labels = [
        'clients',
        'family',
        'friends',
        'social'
      ],
      i = 0,
      l = labels.length;


  //Build mail list
  mailListEl.innerHTML = shortMailsString;

  //Add click event listeners to label side panel.
  for(i,l; i < l; i++){
    mailListVisibilty.showOnly(labels[i]);
  }
});
