function showInfo(){
	// 验证
	var nickname=$("#nickname").val();
	var email=$("#email").val();
	var title=$("#title").val();
	var link=$("#link").val();
	// 正则表达式
	var judge=/\S/;
	// 标志位
	var flag=0;
	if(!judge.test(nickname)){
		console.log("nickname null");
		$("#nickname").css("border-bottom","3px solid #cc3532");
		setTimeout(resetBorder,1000);
		flag=1;
	}
	if(!judge.test(email)){
		$("#email").css("border-bottom","3px solid #cc3532");
		setTimeout(resetBorder,1000);
		flag=1;
	}
	if(!judge.test(title)){
		$("#title").css("border-bottom","3px solid #cc3532");
		setTimeout(resetBorder,1000);
		flag=1;
	}
	if(!judge.test(link)){
		$("#link").css("border-bottom","3px solid #cc3532");
		setTimeout(resetBorder,1000);
		flag=1;
	}
	// 模拟验证成功
	if(flag==0)$(".success").show();
}
function resetBorder(){
	$("#nickname").css("border-bottom","2px solid #777");
	$("#email").css("border-bottom","2px solid #777");
	$("#title").css("border-bottom","2px solid #777");
	$("#link").css("border-bottom","2px solid #777");
}