/**
 * Show/hide mails list after the selection of a label on the side panel.
 * @returns {Object} showOnly(): add a click listener to the labels on side panel to show/hide mails of the mail list.
 *                   showAll(): show the mais of the mail list.
 */

define(function(){

  //Mail list els
  var elsShortMailList = document.getElementsByClassName('js-short-mail');

  var objMailListVisibilty = {

    /**
     * Show/hide mails of the mail list according to label selection
     * @param {String} label Label name
     */

    showOnly: function(label){

      //A label el of the side panel
      var elLabel = document.getElementById('label-' + label),
      //All the labels els of the side panel
          elsLabels = document.getElementsByClassName('js-labels');

      elLabel.addEventListener('click',function(){
        var i = 0,
            l = 0;

          if(elLabel.hasAttribute('data-selected')){
            //Show all the mail list
            objMailListVisibilty.showAll();

            elLabel.removeAttribute('data-selected');
          }else{
            //Show only the mails of selected label

            for(i = 0, l = elsShortMailList.length; i < l ; i++){
              //Label value of the mail
              var valueDataLabelAttr = elsShortMailList[i].getAttribute('data-label');

              if(valueDataLabelAttr !== (label)){
                //Case mail doens´t have the selected label value
                elsShortMailList[i].setAttribute('hidden','');
              }else{
                //Case mail has the selected label valeu
                elsShortMailList[i].removeAttribute('hidden');
              }
            }

            for(i = 0, l = elsLabels.length; i < l; i++){
              elsLabels[i].removeAttribute('data-selected');
            }

            //Set attr when only the mails from the label are visible
            elLabel.setAttribute('data-selected','');
          }
      });
    },

    /**
     * Show all the mail list
     */

    showAll: function(){
      var i = 0,
          l = 0;

      for(i = 0, l = elsShortMailList.length; i < l ; i++){
        elsShortMailList[i].removeAttribute('hidden');
      }
    }
  };

  return objMailListVisibilty;

});
