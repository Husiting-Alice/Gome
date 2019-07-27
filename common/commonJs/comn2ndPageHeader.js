window.onload = function(){
	var otoTop = document.getElementById('toTop');
	
	var otopBox = document.getElementById('topBox');
	var omore = document.getElementById('more');
	var onavDropdownBox = document.getElementById('navDropdownBox');
	var odropdpwnUl = document.getElementById('dropdpwnUl');
	var osearch = document.getElementById('search');
			document.onscroll = function () {
//				显示回到顶部的图标
				var top = document.documentElement.scrollTop;
//				console.log(top);
				if(top > 50){
					otoTop.style.display = 'block';
				}else{
					otoTop.style.display = 'none';
				}
				
//				当滚动长度大于800px的时候,
//					白色盒子#topBox的透明度变成0.7,background: rgba(255,255,255,0.7);
//					"展开图标 #more"显示,"全部商品navDropdownBox"position:fixed,top:10px,left值不变
//					#dropdpwnUl 隐藏
//					“搜索框#search"position:fixed,top:10px,left不变
//					#navDropdownBox hover #dropdpwnUl 显示
				
				
				if(top > 800){
//					console.log('hhhhhhhhhhh');
					otopBox.style.display = 'block';
					otopBox.style.background = 'rgba(255,255,255,0.7)';
					otopBox.style.zIndex = '20';
					omore.style.display = 'block';
					onavDropdownBox.style.position = 'fixed';
					onavDropdownBox.style.top = '5px';
					odropdpwnUl.style.display = 'none';
					odropdpwnUl.style.zIndex = '21';  //???????????
					odropdpwnUl.style.clear = 'both';
					osearch.style.position = 'fixed';
					osearch.style.top = '5px';
					osearch.style.zIndex = '21';
					onavDropdownBox.onmouseover = function(){
						odropdpwnUl.style.display = 'block';
					}
					onavDropdownBox.onmouseout = function(){
						odropdpwnUl.style.display = 'none';
					}
				}else{
					otopBox.style.display = 'none';
					otopBox.style.background = 'rgba(255,255,255,0)';
					odropdpwnUl.style.display = 'block';
//					odropdpwnUl.style.background = 'rgba(92,92,92,1)';
					omore.style.display = 'none';
					onavDropdownBox.style.position = 'static';
					osearch.style.position = 'static';
					odropdpwnUl.style.zIndex = '6';
					onavDropdownBox.onmouseout = function(){
						odropdpwnUl.style.display = 'block';
					}
				}
			}
//			点击图标回到顶部
			otoTop.onclick = function(){
				document.documentElement.scrollTop = 0;
			}
//			透明度轮播
			var oPicBtn = document.getElementsByClassName('picBtn');
			var oBigPic = document.getElementsByClassName('bigPic');
			var oBefore = document.getElementById('before');
			var oNext = document.getElementById('next');
//				console.log( oPicBtn );
			
			slider()
			function slider(){
				
				inter ( );
				
				var iNow = 0;
				var timer;
				
				for(var i = 0;i<oPicBtn.length;i++){
//						console.log(i)
					bind(i)
				}
				
				function bind(index){
					oPicBtn[index].onmouseover = function(){
//							alert(index)
						clearInterval(timer);
						iNow = index;
//							console.log('dianji'+index )
						changePic( index )
						inter()
					}
				}
				
				function changePic ( index ){						
					for(var j = 0;j<oBigPic.length;j++){
						oBigPic[j].style.opacity = 0;
						if (j==index) {
							oBigPic[index].style.opacity = 1;
						}
					}
				}
				//定时器 
				function inter ( ){						
					timer = setInterval(function(){
						iNow++;
//							console.log('zidong'+iNow)
						if( iNow>7 ){
							iNow = 0
						}
						changePic ( iNow )
					},2000)
				}
				//向前
				oBefore.onclick = function(){
					clearInterval(timer);
					iNow -- ;
					if(iNow<0){
						iNow = oBigPic.length-1;
					}
//						console.log('前'+iNow);
					changePic( iNow );
					inter();
				}
				//向后
				oNext.onclick = function(){
					clearInterval(timer);
					iNow ++ ;
					if(iNow>oBigPic.length-1){
						iNow = 0;
					}
//						console.log('后'+iNow);
						changePic( iNow );
						inter();
					}					
				}
}
