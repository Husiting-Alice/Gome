//猜你喜欢    点击上一个，下一个
var item = 1;
//下一个...
$('#uLikeBefore').click(function(){
	if(item >=3){
		item = 0;
	}
	item++;
	$('#uLikeSectionUl'+item).css('display','block');
	$('#uLikeSectionUl'+item).siblings('.uLikeSectionUl').css('display','none');
	console.log(item)
});
//上一个
$('#uLikeAfter').click(function(){
	if(item <= 1){
		item = 4;
	}
	item--;
	$('#uLikeSectionUl'+item).css('display','block');
	$('#uLikeSectionUl'+item).siblings('.uLikeSectionUl').css('display','none');
	console.log(item)
});

