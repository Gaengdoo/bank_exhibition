/*
 * kt.luke
 * ehowlrhdid2@gmail.com
 * 2019.05
 */

$(document).ready(function() {

    //modal_open
    $('.sub_menu dd').on('click', function(){
        $('#modalSlider').fadeIn();
    })

    //modal close
    //audio stop and time to 0 when modal closed
    $('.modal_close').click(function() {
        $('#modalSlider').fadeOut();
        $('audio.fc-media').each(function(){
            this.pause();
            this.currentTime = 0;
        });
    });

    //slider-subpage
    $('#modalSlider').owlCarousel({
        margin: 0,
        nav: true,
        dots: false,
        loop: false,
        touchDrag: true,
        callbacks: true,
        URLhashListener: true,
        autoplayHoverPause: false,
        startPosition: 'URLHash',
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
        },
        //audio stop when moving slider in modal
        onTranslate: function(){
            $('.owl-item').find('audio').each(function(){
                this.pause();
                this.currentTime = 0;
            });
        }
    });


    //slider-modal-image
    $('.modal-img-slide').owlCarousel({
        items: 1,
        margin: 0,
        autoHeight: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
        }
    });

    //seek-backward, seek-Forward
    var media = document.getElementsByClassName('fc-media');


});
$('.fc-media').ready(function(){
    var back_button = $('a-back');
    var forw_button = $('a-forw');

    /* Move 3 seconds back */
    back_button.addEventListener("click", function()
    {
       this.currentTime -= 3
    }, false);

    /* Move 3 seconds forward */
    forw_button.addEventListener("click", function()
    {
       this.currentTime += 3
    }, false);
})
