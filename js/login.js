function judge(){
	var username=$("#inputEmail3").val();
	console.log(username);
	var password=$("#inputPassword3").val();
	console.log(password);
	if(username!="i@admin.com"||password!="8888")
	return false;
}