/*
Concatinated js file 
Author: Alex 
Created Date: 2017-10-11
 */ 
$(document).ready(()=> {
	$('.carousel').carousel({
		ride: false
	});
	$('.form-control').on('input', (e)=> {
		e.preventDefault();
		if($(this).val() !== ''){
			$(this).removeClass('placeholder__star');
		}else{
			$(this).addClass('placeholder__star');
		}
	});
	$('.ico-menu, .mobile-menu__close').click((e)=> {
		e.preventDefault();
		e.stopPropagation();
		$('.mobile-menu').toggleClass('menu-open');
		$('.mobile').toggleClass('window-shadow');
	});
	$('#table-show').click((e)=> {
		e.preventDefault();
		e.stopPropagation();
		$('.content__table').find('thead, tbody').removeClass('hidden');
		$(this).empty();
	});

});

$(document).ready(()=> {
    $('.search__button').click((e)=>{
        e.preventDefault();
        $('.search__input').toggleClass('search-open');
    });

    $('form').keydown((event)=> {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });
    $('.search__input').keyup((e)=> {
        e.preventDefault();
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            $(this).val('');
            return true;
        }
    });
})
$(document).ready(()=> {
    function sizeImage() {
        var  height = $('.carousel-inner').outerHeight();
        var  width = $('.carousel-inner').outerWidth();
        $('.carousel-inner .item').each((i, el)=> {
            if( 1000 >= width){
                $(el).css({
                    'height': height + 'px',
                    'width': 'auto',
                    'max-width': 'none'
                });
                $(el).find('img').css({
                    'height': height + 'px',
                    'width': 'auto',
                    'max-width': 'none'
                });
            }else {
                $('.carousel-inner .item').removeAttr('style');
                $('.carousel-inner .item img').removeAttr('style');
            }
        })
    }
    sizeImage();
    $(window).resize(()=> {
        sizeImage();
    });
})