$(document).ready(function(){
	//加载更多图片
$("#showMore").click(function(){
	var dummyContent = '<li class="grid__item"><a class="grid__link" href="./pic04.html" target="_blank"><img class="grid__img" src="img/photos/4.jpg" alt="Some image" /><h3 class="grid__item-title">暮</h3></a></li><li class="grid__item"><a class="grid__link" href="./pic05.html" target="_blank"><img class="grid__img" src="img/photos/5.jpg" alt="Some image" /><h3 class="grid__item-title">净</h3></a></li><li class="grid__item"><a class="grid__link" href="./pic06.html" target="_blank"><img class="grid__img" src="img/photos/6.jpg" alt="Some image" /><h3 class="grid__item-title">森</h3></a></li><li class="grid__item"><a class="grid__link" href="./pic07.html" target="_blank"><img class="grid__img" src="img/photos/7.jpg" alt="Some image" /><h3 class="grid__item-title">潮</h3></a></li><li class="grid__item"><a class="grid__link" href="./pic08.html" target="_blank"><img class="grid__img" src="img/photos/8.jpg" alt="Some image" /><h3 class="grid__item-title">纱</h3></a></li><li class="grid__item"><a class="grid__link" href="./pic09.html" target="_blank"><img class="grid__img" src="img/photos/9.jpg" alt="Some image" /><h3 class="grid__item-title">矗</h3></a></li>';
$("#showMore").addClass("button--loading");
function showPic(){
		$(".grid").append(dummyContent);
	}
setTimeout(showPic,1000);
$("#showMore").hide(500);
})
// 过渡显示

	// 点赞
$('body').on("click",'.heart',function()
    {
    	var A=$(this).attr("id");
    	var B=A.split("like");
        var messageID=B[1];
        var C=parseInt($("#likeCount"+messageID).html());
    	$(this).css("background-position","")
        var D=$(this).attr("rel");
        if(D === 'like')
        {
        $("#likeCount"+messageID).html(C+1);
        $(this).addClass("heartAnimation").attr("rel","unlike");
        }
        else
        {
        $("#likeCount"+messageID).html(C-1);
        $(this).removeClass("heartAnimation").attr("rel","like");
        $(this).css("background-position","left");
        }


    });

});

