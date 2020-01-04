// BOOTSTRAP

$(function(){		
	$('[data-toggle="tooltip"]').tooltip();
});

// TRANSIÇÃO DO MENU

$(window).scroll(function() {
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').addClass('down');
    
  } else {
    
		$('.bg').removeClass('down');

 	};   	
});

$('.scroll').on('click', function(e){		
		e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

// HOVER DINAMICO POR SESSÃO

function addClass(el) {
    menu.removeClass('active');
    $(el).addClass('active');
};

var menu = $('.navbar-nav a');
var sectionPositions = $('section').map(function(){
    return $(this).position().top;
});
var sections = $('section');
$(document).on('scroll', function () {
    var scroll = $(document).scrollTop();
    var currentElement;
    $(sectionPositions).each(function (i) {
        if (scroll > this - 50) currentElement = menu[i];
    });
    currentElement && addClass(currentElement);
});
menu.on('click', function () {
    addClass(this);
});

// MODAL GALERIA DE IMAGENS

$(".abrirModal").click(function() {
  var url = $(this).find("img").attr("src");
  $("#openimg img").attr("src", url);
  $("#openimg").modal("show");
});

// SCROLL TO TOP

$(function(){
	$(document).on( 'scroll', function(){
		if ($(window).scrollTop() > 100) {
			$('.smoothscroll-top').addClass('show');
		} else {
			$('.smoothscroll-top').removeClass('show');
		}
	});
	$('.smoothscroll-top').on('click', scrollToTop);
});

function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}

// ROLAGEM SUAVE

var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});