$(document).ready(function(){
    $('.show-modal').on('click', function(){

        $('.overlay').animate(
            {
                opacity: 'show'
            }, 3000
        );
        $('.modal').animate(
            {
                height: 'show'
            }, 3000
        );
    });

    $('.close').on('click', function(){
        $('.overlay').animate(
            {
                opacity: 'hide'
            }, 3000
        );
        $('.modal').animate(
            {
                height: 'hide'
            }, 3000
        );
    });
    
});