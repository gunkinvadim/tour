$(document).ready(function(){
    $('.show-modal').on('click', function(){

        $('.overlay').animate(
            {
                opacity: 'show'
            }, 1000
        );
        $('.modal').animate(
            {
                height: 'show'
            }, 1000
        );
    });

    $('.close').on('click', function(){
        $('.overlay').animate(
            {
                opacity: 'hide'
            }, 1000
        );
        $('.modal').animate(
            {
                height: 'hide'
            }, 1000
        );
    });

});