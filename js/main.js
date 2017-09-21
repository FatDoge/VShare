$(document).ready(function(){
	// 文字闪烁
	Typed.new(".element", {
  strings: ["记录足迹，时光印刻", ""],
  // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
  stringsElement: null,
  // typing speed
  typeSpeed: 100,
  // time before typing starts
  startDelay: 1000,
  // backspacing speed
  backSpeed: 0,
  // shuffle the strings
  shuffle: false,
  // time before backspacing
  backDelay: 500,
  // Fade out instead of backspace (must use CSS class)
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutSpeed: 500, // milliseconds
  // loop
  loop: false,
  // null = infinite
  loopCount: null,
  // show cursor
  showCursor: true,
  // character for cursor
  cursorChar: null,
  // attribute to type (null == text)
  attr: null,
  // either html or text
  contentType: 'html',
  // call when done callback function
  callback: function() {},
  // starting callback function before each string
  preStringTyped: function() {},
  //callback for every typed string
  onStringTyped: function() {},
  // callback for reset
  resetCallback: function() {}
});
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

