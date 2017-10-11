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