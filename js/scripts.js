
$(document).ready(function() {

  $("form#inpt").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#number").val());

    //$("#output").append("<li>"+number1+"</li>");
    $("#output").append(pingpong(number1));
  });

  var pingpong = function(num) {
  $("#results").empty();
    for(i = 1; i <= num; i++){
      if(i%15 === 0){
        $("#results").append("<li>pingpong</li>");
      }else if(i%5 === 0){
        $("#results").append("<li>Pong</li>");
      }else if(i%3 === 0){
        $("#results").append("<li>Ping</li>");
      }else {
         $("#results").append("<li>"+i+"</li>");
      }
    }
    //return list;
  };
 });
