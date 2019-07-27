$(function(){
	var left = 0;
	//向前
	$('#after').click(function(){
		if(left>=0){
			left -= 400;
		}
		$('#fwUl').css('left',left+'px');
	});
	//向后
	$('#before').click(function(){
		if(left<=-400){
			left += 400;
		}
		$('#fwUl').css('left',left+'px');
	});
	
//	点击fwLi,切换fatherImg&&sonImg图片路径
	var i = '';
	$('.fwLi').click(function(){	
		//index(this)自0开始,index() 方法返回指定元素相对于其他指定元素的 index 位置。
		//如果未找到元素，index() 将返回 -1。
		i = $('.fwLi').index(this);
		var path = 'img/detail/fangdajing/b'+(i+1)+'.png';
		$('#fatherImg').attr('src',path);
		$('#sonImg').attr('src',path);
	});	
	


//显示和隐藏
	$('#father').hover(function(){
		$('#son').css('display','block');
	},
	function(){
		$('#son').css('display','none');
	})
	
//	放大镜	
	$('#father').mousemove(function(event){
//		console.log(event.clientX,event.clientY);
//		console.log($('#father').offset().left,$('#father').offset().top);
		var nowLeft = Math.floor(event.pageX - $('#father').offset().left-50);
		var nowTop = Math.floor(event.pageY - $('#father').offset().top-50);
//		console.log(nowLeft,nowTop);
		if(nowLeft<0){
			nowLeft = 0;
		}
		if(nowLeft>350){
			nowLeft = 350;
		}
		if(nowTop<0){
			nowTop = 0;
		}
		if(nowTop>350){
			nowTop = 350;
		}
		$('#square').css({
			'top':nowTop+'px',
			'left':nowLeft+'px'
		})
		$('#sonImg').css({
			'top':(-nowTop*4+'px'),
			'left':(-nowLeft*4+'px')
		})
	});
	
//回到顶部  吸顶
	$(window).scroll( function() {
		if($(this).scrollTop() > 100){
			$('#goTop').fadeIn();
			$('#navUl').css({
				"position":"fixed",
				"top":"0px"
			});
			$('#ziyingP').css("position","fixed");
			$('#ziyingP').css("top","0px");
		}else{
			$('#goTop').fadeOut();
			$('#navUl').css("position","static");
			$('#ziyingP').css("position","static");
		}
		
	});
	
	$('#goTop').click(function(){
		$('html , body').animate({scrollTop: 0},300);
		return false;
	});
	
//	商品数量加减
	var num = 1;
	var nowNum = $('#num').val();
	$('#add').click(function(){
		if(nowNum >= 20){
			nowNum = 20;
			$('#add').css("cursor","not-allowed");
		}else{
			$('#add').css("cursor","pointer");
			nowNum++;
		}
		
		$('#num').html(nowNum);
	});
		$('#sub').click(function(){
		if(nowNum <= 1){
			nowNum = 1;
			$('#sub').css("cursor","not-allowed");
		}else{
			$('#sub').css("cursor","pointer");
			nowNum--;
		}
		
		$('#num').html(nowNum);
	});

//  倒计时
//	var h = $('#hour').val();
//	var m = $('#minute').val();
//	var s = $('#second').val();
//	setInterval(function(){
//		if(s<10){
//            $('#second').html('0'+s);
//        }else{
//			
//            $('#second').html(s);
//        }
//        s--;
//        if(s<0){
//            s=59;
//            m--;
//        }
//	},1000);

	function setT(){
		
		var date0 = new Date();	
		var t1 = date0.getTime();
		var aimDate = new Date(2019,10,11);
		var t2 = aimDate.getTime();
	
		var sumTime = t2 - t1;
	
		var nHour = parseInt(sumTime/(60*60*1000)%24);
//		var nHour = parseInt(sumTime/(60*60*1000));
		var nMinute = parseInt(sumTime/(60*1000)%60);
		var nSec = parseInt(sumTime/1000%60);
		
		$('#hour').html(nHour);
		$('#minute').html(nMinute);
		$('#second').html(nSec);
		
	}
	
	setT();
	setInterval(setT,1000);
	

})

