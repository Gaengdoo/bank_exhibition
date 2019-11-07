/*
 * kt.luke
 * ehowlrhdid2@gmail.com
 * 2019.05
 */
$(function(){
	$('.sub_menu dd').on('click', function() {
		$('#firstModal').show();
	});
})

$(document).ready(function() {
    //lang-tab
    $('.lang a').on('click', function() {
        var idx = $('.lang a').index($(this));
        $('.lang a').each(function(index) {
            if (idx == index) {
                $(this).parent('li').addClass("on");
            } else {
                $(this).parent('li').removeClass("on");
            }
        })
    })
    $('.lang a').eq(0).click();

    //modal_close
    $('.modal_close').click(function() {
        $('#firstModal').hide();
    })

    //slider-subpage
	$('#firstModal').owlCarousel({
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
        }
    });

    //slider-modal-image
    $('.modal-img-slide').owlCarousel({
        items: 1,
        margin: 0,
        loop: false,
        nav: false,
        dots: true,
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

    //modal-slider

});
