eventsApp.factory('calendarHelper', function () {
  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  return {
    getCalendarDays: function (year, month) {
      var monthStartDate = new Date(year, month, 1);
      var days = [];
      for(var i = 0; i < monthStartDate.getDay(); i++) {
        days.push("");
      }
      for(var i = 0; i <= new Date(year, month+1, 0).getDate(); i++) {
        days.push(i);
      }
      return days;
    },
    getMonthName: function(monthNumber) {
      return monthNames[monthNumber];
    }
  }
});