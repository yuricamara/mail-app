define(['text!short-mail','text!mails.json'],function(shortMailTplStr,mailsJSON){
  'use strict';


  var createShortMail = function(){

    var mailsJSONArray = JSON.parse('['+mailsJSON+']'),
        iterator = 0,
        mailsJSONArrayLength = mailsJSONArray.length,
        shortMailTplStrParsed = "",
        shortMailStr = "";

    for(iterator, mailsJSONArrayLength; iterator < mailsJSONArrayLength; iterator++){

      var senderName = mailsJSONArray[iterator].owner || 'me',
          mailNumber = mailsJSONArray[iterator].id;

      shortMailTplStrParsed = shortMailTplStr
        .replace(/%mail_number%/g, mailNumber)
        .replace(/%sender_name%/g, senderName);

      shortMailStr += shortMailTplStrParsed;
    }

    return shortMailStr;
  };

  return createShortMail;
});
