
var newstr = [];

// useer-interface

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#numbers").val());
    var inputToString = input.toString();

// back-end

    for (var i = 0; i < inputToString.length; i++){
      if(inputToString.includes(3)) {
        $(".results").append("Im sorry, Dave. I'm afraid I can't do that.");
      } else if (inputToString.includes(2)) {
          newstr.splice(i,1, "Boop! ");
        } else if (inputToString.includes(1)) {
          newstr.splice(i,1, "Beep!");
        } else {
          newstr.push(input);
        }
        }
        $(".results").append(newstr);
      });
    });
