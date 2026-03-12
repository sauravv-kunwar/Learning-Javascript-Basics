// $('.second').hide();

// $('#third').hide();


/// selectors in jquery
// 1. element selector
// $('p').hide();

// 2. class selector
// $('.second').hide();

// 3. id selector
// $('#third').hide();     

/// $('*') - universal selector

/// $('this') - selects the current element

/// $('p:first') - selects the first paragraph element

/// $('p:last') - selects the last paragraph element

/// $('p:even') - selects even indexed paragraph elements (0, 2, 4, ...)

/// $('p:odd') - selects odd indexed paragraph elements (1, 3, 5, ...)


$(document).ready(function()
{


$('#btn_hide').click(function(){
    // $('.second').hide(2000);

    // $(".first").fadeOut(2000);


    //  $('.third').slideDown(2000);

    // $('.box').animate({
    //     width:'+=200px',
    //     height:'+=200px',
    //     backgroundColor: 'lightgreen'
    // }, 2000);

    // $('.second').text('This is the second paragraph');
//     console.log($('.first').text()); // retrieves the text content of the first paragraph element and logs it to the console.
//     console.log($('#third').html('<em>This is the third paragraph</em>  ')); // retrieves the HTML content of the element with id 'third' and logs it to the console.
// });   // event handling in jquery when clicking on the button with id 'btn_hide', the paragraph with class 'second' will be hidden. 

// $('.second').addClass('box'); // adds the class 'box' to the element with class 'second', which will apply the styles defined for the 'box' class to that element.
// $('.second').toggleClass('box'); // toggles the class 'box' on the element with class 'second'. If the element currently has the 'box' class, it will be removed; if it does not have the 'box' class, it will be added.

//modifying css with jquery

let color =  $('div.box').css('background-color'); // retrieves the background color of the element with class 'box' and stores it in the variable 'color'.
console.log(color); // logs the value of the 'color' variable to the console.

$('div.box').css('background-color', 'lightgreen'   ); // changes the background color of the element with class 'box' to light green.

// Form Events


}); 




$("body").keydown(function(event){
    if(event.which == 72){
        $(".second").hide();

    } // when the 'h' key is pressed, the paragraph with class 'second' will be hidden.

    if(event.which == 83){
        $(".second").show();
    }
}) // when the 's' key is pressed, the paragraph with class 'second' will be shown.

})


// Fade  Effects
//Fade IN
// $('.second').fadeIn(2000); // fades in the element with class 'second' over a duration of 2000 milliseconds (2 seconds).

// Fade OUT
// $('.second').fadeOut(2000); // fades out the element with class 'second' over a duration of 2000 milliseconds (2 seconds).

// Fade TO
// $('.second').fadeTo(2000, 0.5); // fades the element with class 'second' to an opacity of 0.5 over a duration of 2000 milliseconds (2 seconds).

// Fade TOGGLE
// $('.second').fadeToggle(2000); // toggles the fade state of the element with class 'second' over a duration of 2000 milliseconds (2 seconds). If the element is currently visible, it will fade out; if it is currently hidden, it will fade in.

// Slide Effects
// Slide UP
// $('.second').slideUp(2000); // slides up the element with class 'second' over a duration of 2000 milliseconds (2 seconds).

// Slide DOWN
// $('.second').slideDown(2000); // slides down the element with class 'second' over a duration of 2000 milliseconds (2 seconds).

// Slide TOGGLE
// $('.second').slideToggle(2000); // toggles the slide state of the element with class 'second' over a duration of 2000 milliseconds (2 seconds). If the element is currently visible, it will slide up; if it is currently hidden, it will slide down.


// Animation Effects
// $('.box').animate({
//     width:'+=200px',
//     height:'+=200px',
//     backgroundColor: 'lightgreen'
// }, 2000); // animates the element with class 'box' by increasing its width and height by 200 pixels and changing its background color to light green over a duration of 2000 milliseconds (2 seconds).

//Manipulate DOM