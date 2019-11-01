$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#numbers").val());
    var newstr = ""
    for (var index = 0; index < input.length; i++) {
      if (parseInt(input[index]) === 1) {
        newstr += "Beep!";
        console.log(newstr);

      }
    }

});
});
