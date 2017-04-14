
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
        $("#results").append("<li class='pingpongc'>pingpong</li>");
        $(".pingpongc").css("background-color", "#31FF50");
        }else if(i%5 === 0){
        $("#results").append("<li class='pongc'>Pong</li>");
        $(".pongc").css("background-color", "#A7653D");
      }else if(i%3 === 0){
        $("#results").append("<li class='pingc'>Ping</li>");
        $(".pingc").css("background-color", "#3E8EE8");
      }else {
         $("#results").append("<li>"+i+"</li>");
      }
    }

  };

//Form Validation and submission
$('#contact_form').bootstrapValidator({
       // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
       feedbackIcons: {
           valid: 'glyphicon glyphicon-ok',
           invalid: 'glyphicon glyphicon-remove',
           validating: 'glyphicon glyphicon-refresh'
       },
       fields: {
           first_name: {
               validators: {
                       stringLength: {
                       min: 2,
                   },
                       notEmpty: {
                       message: 'Please supply your first name'
                   }
               }
           },

           email: {
               validators: {
                   notEmpty: {
                       message: 'Please supply your email address'
                   },
                   emailAddress: {
                       message: 'Please supply a valid email address'
                   }
               }
           },
           phone: {
               validators: {
                   notEmpty: {
                       message: 'Please supply your phone number'
                   },
                   phone: {
                       country: 'US',
                       message: 'Please supply a vaild phone number with area code'
                   }
               }
           },
           comment: {
               validators: {
                     stringLength: {
                       min: 10,
                       max: 200,
                       message:'Please enter at least 10 characters and no more than 200'
                   },
                   notEmpty: {
                       message: 'Please supply a message'
                   }
                   }
               }
           }
       })
       .on('success.form.bv', function(e) {
           $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
               $('#contact_form').data('bootstrapValidator').resetForm();

           // Prevent form submission
           e.preventDefault();

           // Get the form instance
           var $form = $(e.target);

           // Get the BootstrapValidator instance
           var bv = $form.data('bootstrapValidator');

           // Use Ajax to submit form data
           $.post($form.attr('action'), $form.serialize(), function(result) {
               console.log(result);
           }, 'json');
       });

 });
