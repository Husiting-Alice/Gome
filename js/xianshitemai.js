//回到顶部
$(window).scroll( function() {
		if($(this).scrollTop() > 100){
			$('#goTop').fadeIn();
			$('#Mynav').css({
				"position":"fixed",
				"top":"0px",
				"left":"340px",
				"background":"rgba(255,255,255,0.6)"
			});
			$('.MynavLi a').css("color","#DD00A7");
		}else{
			$('#goTop').fadeOut();
			$('#Mynav').css("position","static");
			$('.MynavLi a').css("color","#333");
		}
		
	});
$('#goTop').click(function(){
		$('html , body').animate({scrollTop: 0},300);
		return false;
	})

