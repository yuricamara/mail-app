define(['text!short-mail','text!mails.json','date'],function(shortMailTplStr,mailsJSON,getDateInfo){
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
          contentShort = contentLong.slice(0,35 - subject.length) + '...' || '',
          monthNumber = getDateInfo(mailsJSONArray[iterator].created_at).monthNumber,
          monthString = getDateInfo(mailsJSONArray[iterator].created_at).monthShortString,
          day = getDateInfo(mailsJSONArray[iterator].created_at).day,
          category = mailsJSONArray[iterator].category.replace(/\s/g , '-').toLowerCase()
      ;


      shortMailTplStrParsed = shortMailTplStr
        .replace(/%mail_number%/g, mailNumber)
        .replace(/%sender_name%/g, senderName)
        .replace(/%subject%/g, subject)
        .replace('%content_short%', contentShort)
        .replace('%content_long%', contentLong)
        .replace('%month_number%', monthNumber)
        .replace('%month_string%', monthString)
        .replace(/%day%/g, day)
        .replace('%category%',category)
      ;

      shortMailStr += shortMailTplStrParsed;
    }

    return shortMailStr;
  };

  return createShortMail;
});
