var opicBtnaa = document.getElementsByClassName('picBtnaa');
var obigPicaa = document.getElementsByClassName('bigPicaa');
var obeforeaa = document.getElementById('beforeaa');
var onextaa = document.getElementById('nextaa');
console.log( opicBtnaa );

slider()
function slider(){
	
	inter ( );
	
	var iNow = 0;
	var timer;
	
	for(var i = 0;i<opicBtnaa.length;i++){
		console.log(i)
		bind(i)
	}
	
	function bind(index){
		opicBtnaa[index].onmouseover = function(){
//							alert(index)
			clearInterval(timer);
			iNow = index;
			console.log('dianji'+index )
			changePic( index )
			inter()
		}
	}
	
	function changePic ( index ){						
		for(var j = 0;j<obigPicaa.length;j++){
			obigPicaa[j].style.opacity = 0;
			if (j==index) {
				obigPicaa[index].style.opacity = 1;
			}
		}
	}
	//定时器 
	function inter ( ){						
		timer = setInterval(function(){
			iNow++;
//			console.log('zidong'+iNow)
			if( iNow>2 ){
				iNow = 0
			}
			changePic ( iNow )
		},2000)
	}
	//向前
	obeforeaa.onclick = function(){
		clearInterval(timer);
		iNow -- ;
		if(iNow<0){
			iNow = obigPicaa.length-1;
		}
		console.log('前'+iNow);
		changePic( iNow );
		inter();
	}
	//向后
	onextaa.onclick = function(){
		clearInterval(timer);
		iNow ++ ;
		if(iNow>obigPicaa.length-1){
			iNow = 0;
		}
		console.log('后'+iNow);
		changePic( iNow );
		inter();
	}					
}