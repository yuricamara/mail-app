define(function(){
  'use strict';

    var request = new XMLHttpRequest();

    request.open('GET','js/mails.json',false);

    request.send(null);

    if(request.status !== 200){
      throw new Error(request.statusText);
    }

    return request.responseText;
});
