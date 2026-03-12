$(document).ready(function(){

    // $('#btn').click(function(){
    //     $('#output').load('sample.txt', function(response, statusTxt, xhr){
    //         console.log(response);
    //         console.log(statusTxt);
    //         console.log(xhr);
    //     });
    // });

    $.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        function(data, statusTxt, xhr){
            console.log(data);
            console.log(statusTxt);
            console.log(xhr);
        }
    );
});