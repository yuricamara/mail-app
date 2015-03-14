define(function(){

  var months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec'
  };

  return function(unformattedDate){
    var dateValuesArray = unformattedDate.match(/(\d{2})\/(\d{2})/);

    return {
      monthNumber : dateValuesArray[2],
      monthShortString: months[dateValuesArray[2]],
      day :  dateValuesArray[1]
    };
  };
});
