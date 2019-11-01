// front-end
var newstr = [];

// back-end

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#numbers").val());
    var inputToString = input.toString();

    for (var i = 0; i <= inputToString.length; i++){
      if(inputToString.includes(3)) {
        newstr.splice(i,1,"I'm sorry Dave, I'm afraid I can't do that");
        console.log(newstr);
        $(".results").text(newstr);
      };
    };
  });
});
