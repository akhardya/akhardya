//Animation diaporama
$(document).ready(function(){
	setInterval(function(){
		$(".slideShow ul").animate({marginLeft:-386},1000,function(){
  $(this).css({marginLeft:0}).find("li:last-child").after($(this).find("li:first-child"));
			});
	},3500);
});
//retour Accueil
$(document).ready(function(){
	$(window).scroll(function(){
		posScroll=$(document).scrollTop();
			if(posScroll>=750&&posScroll<=2900)
				$('#up').fadeIn(100);
			else
				$('#up').fadeOut(100);		
		});
	});
//Fancybox
$(document).ready(function(){
	$('.fancybox').fancybox();

});
