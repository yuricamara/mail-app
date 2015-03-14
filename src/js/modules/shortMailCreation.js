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
          subject = mailsJSONArray[iterator].title || '',
          mailNumber = mailsJSONArray[iterator].id || '',
          contentLong = mailsJSONArray[iterator].body || '',
          contentShort = contentLong.slice(0,35 - subject.length) + '...' || ''
      ;


      shortMailTplStrParsed = shortMailTplStr
        .replace(/%mail_number%/g, mailNumber)
        .replace(/%sender_name%/g, senderName)
        .replace('%subject%', subject)
        .replace('%content_short%', contentShort)
        .replace('%content_long%', contentLong)
      ;

      shortMailStr += shortMailTplStrParsed;
    }

    return shortMailStr;
  };

  return createShortMail;
});
