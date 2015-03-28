define(['text!mails.json', 'datesHandling'], function(mailsJSON ,MdlDatesHandling){
  'use strict';
  var mailsJSONArray = JSON.parse('['+mailsJSON+']');

  return{
    getMailInfos: function(i){
      var createdAtInfo = mailsJSONArray[i].created_at || '';

      this.senderName =   mailsJSONArray[i].owner || 'me',
      this.subject =      mailsJSONArray[i].title || '',
      this.mailNumber =   mailsJSONArray[i].id || 9999,
      this.contentLong =  mailsJSONArray[i].body || 'empty e-mail',
      this.contentShort = this.contentLong.slice(0,35 - this.subject.length) + '...' || 'empty e-mail',
      this.monthNumber =  MdlDatesHandling.formatDate(createdAtInfo).monthNumber,
      this.monthString =  MdlDatesHandling.formatDate(createdAtInfo).monthShortString,
      this.day =          MdlDatesHandling.formatDate(createdAtInfo).day,
      this.time =         MdlDatesHandling.formatTime(createdAtInfo),
      this.category =     mailsJSONArray[i].category.replace(/\s/g , '-').toLowerCase();
    },
    JsonLength : mailsJSONArray.length
  };
});
