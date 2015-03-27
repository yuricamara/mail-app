/**
 * Receive a JSON with data on emails and return a HTML snippet with these informations to be displayed in the browser as a list of short emails.
 * @returns {Function} Create a HTML snippet with emails information.
 */

define(['text!shortMail','text!mails.json','datesHandling'],function(shortMailTplStr,mailsJSON,getDateInfo){
  'use strict';

  /**
   * Create a HTML snippet with mails data.
   * @returns {String} HTML snippet
   */

  var createShortMail = function(){

    var mailsJSONArray = JSON.parse('['+mailsJSON+']'),
        l = mailsJSONArray.length,
        i = 0,
        shortMailTplStrParsed = "",
        shortMailStr = "";

    for(i, l; i < l; i++){

      var senderName = mailsJSONArray[i].owner || 'me',
          subject = mailsJSONArray[i].title || '',
          mailNumber = mailsJSONArray[i].id || '',
          contentLong = mailsJSONArray[i].body || '',
          contentShort = contentLong.slice(0,35 - subject.length) + '...' || '',
          monthNumber = getDateInfo(mailsJSONArray[i].created_at).monthNumber,
          monthString = getDateInfo(mailsJSONArray[i].created_at).monthShortString,
          day = getDateInfo(mailsJSONArray[i].created_at).day,
          category = mailsJSONArray[i].category.replace(/\s/g , '-').toLowerCase()
      ;


      shortMailTplStrParsed = shortMailTplStr
        .replace(/\({%=mail_number%}\)/g, mailNumber)
        .replace(/\({%=sender_name%}\)/g, senderName)
        .replace('({%=month_number%})', monthNumber)
        .replace('({%=month_string%})', monthString)
        .replace(/\({%=day%}\)/g, day)
        .replace(/\({%=category%}\)/g,category)

        //Biggest strings
        .replace(/\({%=subject%}\)/g, subject)
        .replace('({%=content_short%})', contentShort)
        .replace('({%=content_long%})', contentLong)
      ;

      shortMailStr += shortMailTplStrParsed;
    }

    return shortMailStr;
  };

  return createShortMail;
});
