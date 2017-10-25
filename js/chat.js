function sendMsg(){
		var userMsg=$("#userMsg").val();
		console.log("待发送数据:"+userMsg);
		$("#userMsg").val("");
		$(".chat-title").html("<span style='font-size:17px;'>输入中...<span>");
		var showMsg='<!-- 用户消息窗口 --><div class="col-xs-12 msg-view"><div class="user-msg"><div class="col-xs-9 user-padding"><p class="rightmsg fr">'+userMsg+'</p></div><div class="col-xs-3"><img src="./images/headlogo.jpg"></div></div></div>'
	setTimeout(addMsg(showMsg),1000);
	getMsg(userMsg);
	}
//发送数据到图灵api
function getMsg(userMessage){
	var key="e06efe9f81c86c4ff27b32726aa9ad0a";
	var url="http://www.tuling123.com/openapi/api";
$.post(url,
	{
"key": key,
"info": userMessage,
"loc":"浙江省杭州市",
"userid":"admin"
},
function(result){
	//根据状态码进行分类
	var statusCode=result.code;
	console.log(statusCode+typeof(statusCode));
	//文本类
	function textMsg(){
	console.log("进入文本分类");
	var resultMsg=result.text;
	console.log('接收数据:'+resultMsg);
	var showAiMsg='<!-- 机器人消息窗口 --><div class="col-xs-12 msg-view"><div class="ai-msg"><div class="col-xs-3"><img src="./images/rem.jpg"></div><div class="col-xs-9 ai-padding"><p class="msg">'+resultMsg+'</p></div></div></div>';
	$(".row").append(showAiMsg);
	$('html').scrollTop( $(document).height());
	$(".chat-title").html("蕾姆");
	}
	//链接类
	function linkMsg(){
	console.log("进入链接分类");
	var resultMsg=result.text;
	var resultLink=result.url;
	var showAiMsg='<!-- 机器人消息窗口 --><div class="col-xs-12 msg-view"><div class="ai-msg"><div class="col-xs-3"><img src="./images/rem.jpg"></div><div class="col-xs-9 ai-padding"><p class="msg">'+resultMsg+'</p></div></div></div>';
	$(".row").append(showAiMsg);
	var showAiMsg='<!-- 机器人消息窗口 --><div class="col-xs-12 msg-view"><div class="ai-msg"><div class="col-xs-3"><img src="./images/rem.jpg"></div><div class="col-xs-9 ai-padding"><p class="msg"><a href="'+resultLink+'" target="_blank">点击查看</a></p></div></div></div>';
	$(".row").append(showAiMsg);
	$('html').scrollTop($(document).height());
	$(".chat-title").html("蕾姆");
	}
	switch(statusCode){
	case 100000:
		setTimeout(textMsg,1000);
		break;
	case 200000:
		setTimeout(linkMsg,1000);
	}
});
}
//向消息框输出发送消息
function addMsg(userMessage){
	$(".row").append(userMessage);
	$('html').scrollTop( $(document).height());
}

$(document).ready(function(){
	console.log("chat.js运行......");
	document.onkeydown=function(event){
  var e = event || window.event || arguments.callee.caller.arguments[0];
   if(e && e.keyCode==13){
     console.log("发送...");
     sendMsg();
  }
}; 
})