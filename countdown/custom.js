$(document).ready(function () {

    "use strict";

    var time = $('.count-down');
    if (time.length) {
      var endDate = new Date(time.data("end-date"));
      time.countdown({
        date: endDate,
        render: function (data) {
          $(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(data.days, 3)
            + '</h1><p>days</p></div><div><h1>'
            + this.leadingZeros(data.hours, 2)
            + '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1>'
            + this.leadingZeros(data.min, 2)
            + '</h1><p>min</p></div><div><h1>'
            + this.leadingZeros(data.sec, 2)
            + '</h1><p>sec</p></div></div>');
        }
      });
    }
    
});
