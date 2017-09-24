var temp=false;
function judge(){
	var url="http://hduzjh.cn:8080/VSCOM/LoginServlet";
	var username=$("#inputEmail3").val();
	var password=$("#inputPassword3").val();
	url+="?username="+username+"&password="+password;
	$.getJSON(url, function(data) {
    console.log(data);
    console.log(typeof(data.status));
    if(data.status) success();
    else {
    error();
    return temp;
    }
    })
    
}
function error(){
	$("#warning").slideDown(700);
    function hide(){
    	$("#warning").slideUp(700);
    }
    setTimeout(hide,1200);
}
function success(){
	$("#success").slideDown(700);
    function hide(){
    	$("#success").slideUp(700);
    }
    setTimeout(jump,900);
    function jump(){
    self.location='./selfcenter.html';
    }
}

