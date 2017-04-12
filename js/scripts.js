
$(document).ready(function() {

  $("form#inpt").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number").val());
    alert(number1);
    //$("#output").text(number1);
  });
 });
