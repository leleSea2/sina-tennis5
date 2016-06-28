//创建Ajax
function GetAjaxObj(){
	var ajax_obj
	try{
		ajax_obj=new XMLHttpRequest();
	}catch(e){
			ajax_obj=new ActiveXObject("Microsoft.XMLHTTP");
		}
	return ajax_obj;
	}
//执行ajax
function action_ajax(ajax_obj,url){
		//alert("aaa");
		ajax_obj.open("get",url,true);
		ajax_obj.onreadystatechange=return_fun;
		ajax_obj.send(null);
		}
//回调函数
		function return_fun(){
		if(ajax_obj.readyState==4){
			//alert(ajax_obj.responseText);
			if(ajax_obj.responseText==1){
				document.getElementById("vali_user").innerHTML="<img src='picture/true.jpg' />";
			}else{
				document.getElementById("vali_user").innerHTML="<img src='picture/red_x.jpg' />该手机号已注册，请<a href=''>直接登录</a>，忘记密码<a href=''>请点此找回</a>";

			}
		}
	}