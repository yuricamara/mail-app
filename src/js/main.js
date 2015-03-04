(function(){
  'use strict';

  var request = new XMLHttpRequest();

  request.open('GET','js/mails.json');

  request.onreadystatechange = function(){
    if(request.readyState === 4 && request.status === 200 ){
      console.log(request.responseText);
    }
  };

  request.send(null);

}());
