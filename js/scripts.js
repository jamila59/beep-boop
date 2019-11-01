
// useer-interface

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#numbers").val());
    var inputToString = input.toString();

  });
});


// back-end
  var newStr = [];
  var speak = function(number) {
  for (var i=0; i<= inputToString; i++) {
  newStr.push(speak(i));
      };

      if (number.toString().includes(3)==true) {
         return "I'm sorry, Dave, I'm afraid I can't do that.";
       } else if (number.toString().includes(2)==true) {
         return "Boop!";
       } else if (number.toString().includes(1)==true) {
         return "Beep!";
       } else {
       return number.toString();
        //  return " " + number.toString();
        };
     };
