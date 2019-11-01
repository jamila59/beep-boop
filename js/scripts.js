
var series = [];

// useer-interface

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#numbers").val());
    var inputToString = input.toString();

// back-end






    for (var i = 0; i < inputToString.length; i++){
      if(inputToString.includes(3)) {
        series.splice(i,1," I'm sorry Dave, I'm afraid I can't do that." );;
      } else if (inputToString.includes(2)) {
        $(".results").append("Beep!");
        } else if (inputToString.includes(1)) {
        $(".results").append(i + "Boop!");
        } else {
          series.push(input);
        }
        }
        $(".results").append(series);
      });
    });

// });
