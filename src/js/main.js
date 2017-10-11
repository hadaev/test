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
