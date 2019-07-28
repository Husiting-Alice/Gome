$(function(){
//	点击关闭,让顶部大图消失
//用AJAX请求加载的内容是动态的，要用on()才行
//$('非动态祖先级节点').on('事件','#发生事件的节点',函数)

	$('header').on('click','#close',function(){
		console.log('1111');
		$('#topImgBox').css('display','none');
	});
	
////	鼠标放在"国美会员"那里显示下拉内容		
		//存在问题：鼠标还没移走，就没了。。。解决：把mouseout改成mouseleave就可以了
//		不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。
//		只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。
//		http://www.w3school.com.cn/tiy/t.asp?f=jquery_event_mouseleave_mouseout

	$('header').on('mouseenter','#gomeMembership',function(){
		$('#membershipDropdownWrap').css('display','block');
	});
	$('header').on('mouseleave','#gomeMembership',function(){
		$('#membershipDropdownWrap').css('display','none');
	});


//	国美会员,hover  下拉内容中模拟"水平轮播",手动触发
			
	var left = 0;
//	下一张
	
	$('header').on('click','#memberCarouselLast',function(){ 
//      console.log(left);
		if(left <= 0 && left > -420){
			left = left-210;
			$('#membCarouUl').css('left',left+'px');
		}
	});
//	上一张

	$('header').on('click','#memberCarouselNext',function(){ 
//		console.log(left);
		if(left>= -420 && left<0){	
			left = left+210;
			$('#membCarouUl').css('left',left+'px');
		}
	});
//	nav导航栏右侧向上滚动"水平（竖直）"轮播		
//	var top = 0;
	var num = 0;
	setInterval(function(){	
		num++;
		if(num>3){
			num=0;
			$('#navCUl').css({'top':-39*num+'px'});
			num=1;
		}
		$('#navCUl').animate({'top':-39*num+'px'})
//		if(top <= -78){
//			top = 39;
//			$('#navCUl').css('transition','');
//			
//		}else{
//			
//			$('#navCUl').css('transition','top 0.5s linear');
//		
//		}
//		top = top-39;
//		$('#navCUl').css('top',top+'px');
		
	},1000);
	
})
