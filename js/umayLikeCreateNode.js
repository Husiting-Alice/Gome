var str1='';
var str2='';
var str3 ='';
for(var i=0;i<ulikeArray1.length;i++){

	str1 += `<li class="uLikeSectionLi">
					<a href="" class="uLikeSectionLiA">
						<img src="${ulikeArray1[i].src}" class="uLikeSectionAImg"/>
						<p class="uLikeSectionAP">
							${ulikeArray1[i].desc}
						</p>
						<p class="uLikeSectionAPrice">
							${ulikeArray1[i].price}
						</p>
					</a>
				</li>`;
	  document.getElementById('uLikeSectionUl1').innerHTML = str1;
}
for(var j=0;j<ulikeArray2.length;j++){

	str2 += `<li class="uLikeSectionLi">
					<a href="" class="uLikeSectionLiA">
						<img src="${ulikeArray2[j].src}" class="uLikeSectionAImg"/>
						<p class="uLikeSectionAP">
							${ulikeArray2[j].desc}
						</p>
						<p class="uLikeSectionAPrice">
							${ulikeArray2[j].price}
						</p>
					</a>
				</li>`;
	document.getElementById('uLikeSectionUl2').innerHTML = str2;
	
}

for(var k=0;k<ulikeArray3.length;k++){

	str3 += `<li class="uLikeSectionLi">
					<a href="" class="uLikeSectionLiA">
						<img src="${ulikeArray3[k].src}" class="uLikeSectionAImg"/>
						<p class="uLikeSectionAP">
							${ulikeArray3[k].desc}
						</p>
						<p class="uLikeSectionAPrice">
							${ulikeArray3[k].price}
						</p>
					</a>
				</li>`;
	document.getElementById('uLikeSectionUl3').innerHTML = str3;
	
}



	
		