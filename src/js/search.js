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