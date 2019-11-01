// global variable
var result = [];
// front-end

$(document).ready(function(){
   $("#formOne").submit(function(event){
    event.preventDefault();
    var input=$("#input").val();
    for (var i=0; i<=input; i++) {
     result.push(speak(i));
     $("#result").text(result);
    };
  });
});

// back-end
    var speak = function(integer) {
      if (integer.toString().includes(3)==true) {
         return "I'm sorry, Dave, I'm afraid I can't do that.";
       } else if (integer.toString().includes(2)==true) {
         return "Boop!";
       } else if (integer.toString().includes(1)==true) {
         return "Beep!";
       } else {
       return integer.toString();
      };
     };
