$(document).ready(function(){

    $('input[type="text"], input[type="email"], input[type="password"]').focus(function(){
        $(this).css('background-color', 'lightgray');
    });

    $('input[type="text"], input[type="email"], input[type="password"]').blur(function(){
        $(this).css('background-color', '');
    });


   $('#registrationForm').submit(function(event)
   {
    console.log("Form Submitted Successfully");
        event.preventDefault(); 
   });

});

//AJAX
