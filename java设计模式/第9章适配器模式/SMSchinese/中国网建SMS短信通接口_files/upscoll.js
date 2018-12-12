function checklogin(){

	var UserName= document.myform.UserName;
	var Pass= document.myform.Pass;
	//var verifycode= document.myform.verifycode;
	
	if (UserName.value=="" || Pass.value==""){
	document.getElementById("Login_err").innerHTML="用户名或密码不能为空！";
	document.getElementById("Login_err_N").style.display="";
	//alert("用户名或密码不能为空！")
	return false;
	}
	
	//if (verifycode.value.length!=4){
	//document.getElementById("Login_err").innerHTML="请输入校验码！";
	//document.getElementById("Login_err_N").style.display="";
	//return false;
	//}
	
	document.getElementById("button").disabled="disabled";

	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	var Posthttp="action=Login&UserName="+encodeURIComponent(UserName.value)+"&Pass="+Pass.value;
	//var Posthttp="action=Login&UserName="+encodeURIComponent(UserName.value)+"&Pass="+Pass.value+"&verifycode="+verifycode.value;
	xmlhttp.open("post","/program/Login.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
			aa=xmlhttp.responseText;
				if(aa=="登录成功！"){
					//alert("恭喜，登录成功！")
					location.href="/user/";	
					return false;
				}else{
					//alert(aa)
					document.getElementById("Login_err_N").style.display="";
					document.getElementById("Login_err").innerHTML=aa;					
					document.getElementById("button").disabled="";
					return false;
				}
				return false;
			}
			else
			{ alert("网络链接失败！");;
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(Posthttp);
	return false;

}

function checkSMS(){
	var htmlout=""
	var Contents=document.myform.Contents;
	var Mob=document.myform.Mob;
	html_zt=0;
	if (Contents.value==""){
	htmlout="\n短信内容不能为空！\n"
	html_zt=1;
	}
	
	html_mob=0;
	html_mob_tel=0;
	if (Mob.value==""){
	htmlout=htmlout+"\n输入手机号！\n"
	html_mob=1;
	}else{
		//var num = document.myform.Mob.value;
		//var partten = /^0(([1,2]\d)|([3-9]\d{2}))\d{8}$/;
		//if(partten.test(num)){
		//}else{
		//	var partten = /^1[3,4]\d{9}$/;
		//	if(partten.test(num)){
		//	}else{
		//	htmlout=htmlout+"\n输入的电话号码格式不正确！\n"
		//	html_mob_tel=1;
		//	}

		//}
	}
	
	if ( html_zt==1 || html_mob==1 || html_mob_tel==1){
	alert(htmlout)
	return false;
	}
	
	document.getElementById("sms_On").style.display="none";
	document.getElementById("sms_Off").style.display="";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	var Posthttp="action=SmsTemp&Contents="+Contents.value+"&Mob="+Mob.value;
	xmlhttp.open("post","/program/SmsTemp.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
				var aa=xmlhttp.responseText;
				if(aa=="sms_ok"){
					alert("短信发送成功");
					//document.getElementById("Contents").value=""; 
					document.getElementById("Mob").value=""; 
				}else{
					alert(aa);
				}				
				document.getElementById("sms_On").style.display="";
				document.getElementById("sms_Off").style.display="none";
				return false;
			}
			else
			{ alert("网络链接失败！");;
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(Posthttp);
	return false;
}

function check106SMS(){
	var htmlout=""
	var Contents=document.myform.tdContents;
	var Mob=document.myform.tdMob;
	html_zt=0;
	if (Contents.value==""){
	htmlout="\n短信内容不能为空！\n"
	html_zt=1;
	}
	
	html_mob=0;
	html_mob_tel=0;
	if (Mob.value==""){
	htmlout=htmlout+"\n输入手机号！\n"
	html_mob=1;
	}else{
		//var num = document.myform.Mob.value;
		//var partten = /^0(([1,2]\d)|([3-9]\d{2}))\d{8}$/;
		//if(partten.test(num)){
		//}else{
		//	var partten = /^1[3,4]\d{9}$/;
		//	if(partten.test(num)){
		//	}else{
		//	htmlout=htmlout+"\n输入的电话号码格式不正确！\n"
		//	html_mob_tel=1;
		//	}

		//}
	}
	
	if ( html_zt==1 || html_mob==1 || html_mob_tel==1){
	alert(htmlout)
	return false;
	}
	
	document.getElementById("106sms_On").style.display="none";
	document.getElementById("106sms_Off").style.display="";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	var Posthttp="action=SmsTemp106&Contents="+Contents.value+"&Mob="+Mob.value;
	xmlhttp.open("post","/program/SmsTemp.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
				var aa=xmlhttp.responseText;
				if(aa=="sms_ok"){
					alert("短信发送成功");
					document.getElementById("tdMob").value=""; 
				}else{
					alert(aa);
				}				
				document.getElementById("106sms_On").style.display="";
				document.getElementById("106sms_Off").style.display="none";
				return false;
			}
			else
			{ alert("网络链接失败！");;
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(Posthttp);
	return false;
}


function checkLen(term){
	var terma=term.value.length;
	document.getElementById("termLen").value=67 - terma;
	if (document.getElementById("termLen").value<=0){
	 alert("您输入的短信内容太长，将被截取！");
	 term.value=term.value.substring(0,67);
	 document.getElementById("termLen").value=0;
	}
}

function checkLenUser(term){	
	var terma=term.value.length;
	var smsLen=document.getElementById("smsLen");
	document.getElementById("termLen").value=smsLen.value - terma;
	if (document.getElementById("termLen").value<0){
	 alert("您输入的短信内容太长，将被截取！");
	 term.value=term.value.substring(0,smsLen.value);
	 document.getElementById("termLen").value=0;
	}
}

function checkShow(){

	if(document.getElementById("xuanzhong").value==0){
		document.getElementById("xuanzhong").value=1;
	}else{
		document.getElementById("xuanzhong").value=0;
	}
	if(document.getElementById("xuanzhong").value==1){
		document.getElementById("smsLen").value="300"; 
		document.getElementById("termFont").innerHTML="300"; 
		
		document.getElementById("termLen").value=document.getElementById("smsLen").value-(67-document.getElementById("termLen").value); 
	}else{
		document.getElementById("smsLen").value="67"; 
		document.getElementById("termLen").value="67"; 
		document.getElementById("termFont").innerHTML="67"; 
		
		var term=document.getElementById("Contents")
		var terma=term.value.length;
		var smsLen=document.getElementById("smsLen");
		document.getElementById("termLen").value=67 - terma;
		if (document.getElementById("termLen").value<=0){
		alert("您输入的短信内容太长，将被截取！");
		term.value=term.value.substring(0,67);
		document.getElementById("termLen").value=0;
		}
	}
}


//短信群发
function checkSMSUser(){
	var htmlout=""
	var Contents=document.myform.Contents;
	var IP=document.myform.IP;
	var Mob=document.myform.Mob;
	html_zt=0;
	if (Contents.value==""){
	htmlout="\n短信内容不能为空！\n"
	html_zt=1;
	}
	
	html_mob=0;
	html_mob_tel=0;
	if (Mob.value==""){
	htmlout=htmlout+"\n输入手机号！\n"
	html_mob=1;
	}
	
	if ( html_zt==1 || html_mob==1 ){
	alert(htmlout)
	return false;
	}
	
	document.getElementById("sms_On").style.display="none";
	document.getElementById("sms_Off").style.display="";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	
	document.myform.method="post";
	document.myform.action="/program/SmsTemp.asp?action=SmsUser" 
	document.myform.submit();
	return false;
	
}

//短信群发
function checkSMSUser1(){
	var htmlout=""
	var Contents=document.myform.Contents;
	var IP=document.myform.IP;
	var Mob=document.myform.Mob;
	html_zt=0;
	if (Contents.value==""){
	htmlout="\n短信内容不能为空！\n"
	html_zt=1;
	}
	
	html_mob=0;
	html_mob_tel=0;
	if (Mob.value==""){
	htmlout=htmlout+"\n输入手机号！\n"
	html_mob=1;
	}
	
	var MobMuns=document.getElementById("MobMuns");
	if (MobMuns.value>10000){
	alert("最多只支持对10000个手机号，同时发送短信！")
	return false;
	}
	
	if ( html_zt==1 || html_mob==1 ){
	alert(htmlout)
	return false;
	}
	
	document.getElementById("sms_On").style.display="none";
	document.getElementById("sms_Off").style.display="";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	
	document.myform.method="post";
	document.myform.action="Sms_Temp.asp" 
	document.myform.submit();
	return false;
	
}

function strReplace(str){ 
	var str=str.value;
	var t="",len=0; 
	len=str.split(/\r\n/g); 
	var n=0
	for(var i=0;i<len.length;i++){ 
	n=n+1
	} 
	document.getElementById("MobMuns").value=n 
	if(n<10){
	document.getElementById("MobMuns").style.width="9px";
	}else{
		if(n<100){
		document.getElementById("MobMuns").style.width="18px";
		}else{
			if(n<1000){
			document.getElementById("MobMuns").style.width="27px";
			}else{
			document.getElementById("MobMuns").style.width="36px";
			}
		}
	}
}


//会员注册
var Chnet_U=0;
function UserYz(){
	
	var UserName=document.getElementById("UserName");
	
	bString = "1234567890";
	UserSzyz=0;
	for(i = 0; i < UserName.value.length; i ++)
	{
		if (bString.indexOf(UserName.value.substring(i,i+1))==-1)
		{
			UserSzyz=1;
		}
	}
	
	if(UserSzyz==0){
		document.getElementById("UserNameOut").innerHTML="<font>用户名不能为纯数字！</font>";
		Chnet_U=0;
	}else{	
		if(UserName.value.length<4){
		document.getElementById("UserNameOut").innerHTML="<font>用户名为4位字符以上，允许用中文！</font>";
		Chnet_U=0;
		}else{	
			var xmlhttp;
			try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
			catch(e){
				try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
				catch (e){ 
					try{xmlhttp=new XMLHttpRequest();}
					catch (e){}		}
			}
				var Posthttp="action=Yz&UserName="+ UserName.value ;
				xmlhttp.open("post","/program/User_Add.asp?t=" + new Date().getTime());
				xmlhttp.onreadystatechange=function()
				{
					if(4==xmlhttp.readyState)
					{
						if(200==xmlhttp.status)
						{
						aa=xmlhttp.responseText;
							if (aa=="no"){
							document.getElementById("UserNameOut").innerHTML="<font>该用户名已经被注册，请改用其他用户名！</font>";
							Chnet_U=0;
							}
							if (aa=="ok"){
							document.getElementById("UserNameOut").innerHTML="<span>用户名填写正确！</span>";
							Chnet_U=1;
							}
						}
						else
						{ alert("网络链接失败！");;
						return false;}	
					}
				}
				xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
				xmlhttp.send(Posthttp);
				return false;
		}	
	}
	return false;
}

var Chnet_N=0;
function NameYz(){
	
	var Name=document.getElementById("Name");
	if(Name.value.length<2){
	document.getElementById("NameOut").innerHTML="<font>请填写您的姓名！</font>";
	Chnet_N=0;
	}else{	
	document.getElementById("NameOut").innerHTML="<span>姓名填写正确！</span>";
	Chnet_N=1;
	}	
}

var Chnet_E=0
function EmailYz(){	
	
	var CheckMail = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	var email = document.getElementById("email");
	if(!CheckMail.test(email.value))
	{
	 Chnet_E=0;	
	 document.getElementById("emailOut").innerHTML="<font>您输入的验证邮箱格式不正确！</font>";
	}else{
		var xmlhttp;
		try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
		catch(e){
			try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
			catch (e){ 
				try{xmlhttp=new XMLHttpRequest();}
				catch (e){}		}
		}
			xmlhttp.open("get","/program/User_Add.asp?action=Yz&Email="+ email.value +"&t=" + new Date().getTime());
			xmlhttp.onreadystatechange=function()
			{
				if(4==xmlhttp.readyState)
				{
					if(200==xmlhttp.status)
					{
					aa=xmlhttp.responseText;
						if (aa=="no"){
						document.getElementById("emailOut").innerHTML="<font>该邮箱已经被注册，请改用其他邮箱！</font>";
						Chnet_E=0;
						}
						if (aa=="ok"){
						document.getElementById("emailOut").innerHTML="<span>您输入的验证邮箱正确！</span>";
						Chnet_E=1;
						}
					}
					else
					{ alert("网络链接失败！");;
					return false;}	
				}
			}
			xmlhttp.send(null); 
	}
	return false;
}

var Chnet_M=0;
function MobYz(){	
	
	var mob=document.getElementById("Mob");	
	if(mob.value.length<10 || mob.value.length>11){
	document.getElementById("mobOut").innerHTML="<font>请输入手机号，用来接收登录密码！</font>"
	Chnet_1=0;
	}else{
		
		
		Chnet_Mg=1;
		var bString = "1234567890";
		for(i = 0; i < mob.value.length; i ++)
		{
			if (bString.indexOf(mob.value.substring(i,i+1))==-1)
			{
				Chnet_Mg=0;
			}			
		}
		if(Chnet_Mg==0){
		document.getElementById("mobOut").innerHTML="<font>您输入的手机格式不正确！</font>";
		Chnet_M=0;
		}else{
		
		var xmlhttp;
		try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
		catch(e){
			try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
			catch (e){ 
				try{xmlhttp=new XMLHttpRequest();}
				catch (e){}		}
		}
			xmlhttp.open("get","/program/User_Add.asp?action=Yz&Mob="+ mob.value +"&t=" + new Date().getTime());
			xmlhttp.onreadystatechange=function()
			{
				if(4==xmlhttp.readyState)
				{
					if(200==xmlhttp.status)
					{
					aa=xmlhttp.responseText;
						if (aa=="no"){
						document.getElementById("mobOut").innerHTML="<font>该手机已经被注册，请改用其号码！</font>";
						Chnet_M=0;
						}
						if (aa=="ok"){
						document.getElementById("mobOut").innerHTML="<span>您输入的手机格式正确！</span>";
						Chnet_M=1;
						}
					}
					else
					{ alert("网络链接失败！");;
					return false;}	
				}
			}
			xmlhttp.send(null); 
		}
	
	}
	return false;
}

var Chnet_K=0;
function KeyYz(){	
	
	var CheckMail = /^([a-zA-Z0-9_-])+/;
	var Key = document.getElementById("Key");
	if(Key.value.length<10){
		Chnet_K=0;	
		 document.getElementById("KeyOut").innerHTML="<font>接口密钥太短，建议20个数字+字母以上！</font>";
	}else{
		Chnet_K=1;
		bString = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(i = 0; i < Key.value.length; i ++)
		{
			if (bString.indexOf(Key.value.substring(i,i+1))==-1)
			{
				Chnet_K=0;
			}
			
		}		
		
		if(Chnet_K==0)
		{
		 Chnet_K=0;	
		 document.getElementById("KeyOut").innerHTML="<font>密钥只能为数字或字母！</font>";
		}else{
		Chnet_K=1;	
		document.getElementById("KeyOut").innerHTML="<span>接口安全密码填写正确！</span>";
		}
	}
}

var Chnet_P=0;
function PassYz(){
	
	var Pass=document.getElementById("Pass");
	if(Pass.value.length<6){
	document.getElementById("PassOut").innerHTML="<font>请输入您的登陆密码，6位字符以上！</font>";
	Chnet_P=0;
	}else{	
	document.getElementById("PassOut").innerHTML="<span>登陆密码填写正确！</span>";
	Chnet_P=1;
	}	
}

var Chnet_P1=0;
function Pass1Yz(){
	
	var Pass1=document.getElementById("Pass1");
	if(document.getElementById("Pass").value==""){
		Chnet_P1=0;
		document.getElementById("PassOut").innerHTML="<font>请输入您的登陆密码，6位字符以上！</font>";
		document.getElementById("Pass1Out").innerHTML="<font>请输入您的验证密码！</font>";
	}else{
		if(Pass1.value==document.getElementById("Pass").value){
		document.getElementById("Pass1Out").innerHTML="<span>验证登陆密码填写正确！</span>";
		Chnet_P1=1;	
		}else{	
		document.getElementById("Pass1Out").innerHTML="<font>您输入的验证登陆密码不正确！</font>";
		Chnet_P1=0;
	}	
	}
}

var Chnet_V=0;
function verifycodeYz(){
	
	var verifycode=document.getElementById("verifycode");
	if(verifycode.value.length!=4){
	document.getElementById("verifycodeOut").innerHTML="<font>您输入的校验码，4位字符以上！</font>";
	Chnet_V=0;
	}else{	
			var xmlhttp;
			try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
			catch(e){
				try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
				catch (e){ 
					try{xmlhttp=new XMLHttpRequest();}
					catch (e){}		}
			}
				var Posthttp="action=verifycodeYz&verifycode="+ verifycode.value ;
				xmlhttp.open("post","/program/User_Add.asp?t=" + new Date().getTime());
				xmlhttp.onreadystatechange=function()
				{
					if(4==xmlhttp.readyState)
					{
						if(200==xmlhttp.status)
						{
						aa=xmlhttp.responseText;
							if (aa=="no"){
							document.getElementById("verifycodeOut").innerHTML="<font>您输入的校验码错误！</font>";
							Chnet_V=0;
							}
							if (aa=="ok"){
							document.getElementById("verifycodeOut").innerHTML="<span>校验码填写正确！</span>";
							Chnet_V=1;
							}
						}
						else
						{ alert("网络链接失败！");;
						return false;}	
					}
				}
				xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
				xmlhttp.send(Posthttp);
				return false;
	}	
}

function check(){
	UserYz();
	NameYz();
	EmailYz();
	MobYz();
	KeyYz();
	verifycodeYz()
	//PassYz();
	//Pass1Yz()
	//if(Chnet_U==1 && Chnet_N==1 && Chnet_E==1 && Chnet_M==1 && Chnet_K==1 && Chnet_P==1 && Chnet_P1==1){
	if(Chnet_U==1 && Chnet_N==1 && Chnet_E==1 && Chnet_M==1 && Chnet_K==1 && Chnet_V==1){
		

		var xmlhttp;
		try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
		catch(e){
			try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
			catch (e){ 
				try{xmlhttp=new XMLHttpRequest();}
				catch (e){}		}
		}
		
		document.getElementById("sms_On").style.display="none";
		document.getElementById("sms_Off").style.display="";
		
		var UserNames=document.getElementById("UserName");	
		var Names=document.getElementById("Name");
		var Emails=document.getElementById("email");	
		var Mobs=document.getElementById("Mob");	
		var keys=document.getElementById("Key");	
		var IPs=document.getElementById("IP");	
		var verifycode=document.getElementById("verifycode");
		
		
		var Posthttp="action=User_Add&Name="+encodeURIComponent(Names.value);
		Posthttp=Posthttp+"&UserName="+encodeURIComponent(UserNames.value);
		Posthttp=Posthttp+"&Email="+Emails.value;
		Posthttp=Posthttp+"&Mob="+Mobs.value;
		Posthttp=Posthttp+"&key="+keys.value;
		Posthttp=Posthttp+"&IP="+IPs.value;
		Posthttp=Posthttp+"&verifycode="+verifycode.value;
		
		
		xmlhttp.open("post","/program/User_Add.asp?t=" + new Date().getTime());		
		xmlhttp.onreadystatechange=function()
		{
			if(4==xmlhttp.readyState)
			{
				if(200==xmlhttp.status)
				{
					var aa=xmlhttp.responseText;
					if(aa=="RegOk"){
						alert("注册成功，请登录\n\n登录密码请查看您的手机短信！\n\n如长时间未收到短信，请点击找回密码");
						location.href="/Login.shtml";	
					}else{
						alert(aa);
					}
					document.getElementById("sms_On").style.display="";
					document.getElementById("sms_Off").style.display="none";
					return false;
				}
				else
				{ alert("网络链接中断，请稍稍尝试！");
				return false;}	
			}
		}
		xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
		xmlhttp.send(Posthttp); 
		return false;
		
	}else{
		return false;
	}
	return false;
}

function checkPay(){
	var Amount=document.getElementById("Amount");
	var Order_CZAmount=document.getElementById("Order_CZAmount")
	Chnet_K=1;
	if( Amount.value==""){
		alert("请输入充值金额！")
		Amount.focus();
		return false;
	}else{
		var bString = "1234567890";
		for(i = 0; i < Amount.value.length; i ++)
		{
			if (bString.indexOf(Amount.value.substring(i,i+1))==-1)
			{
				Chnet_K=0;
			}
			
		}		
		
		if(Chnet_K==0){
		alert("充值金额为整数数字！");
		Amount.focus();
		return false;
		}
	}
	if(document.getElementById("vip").value=="true"){
		if( Amount.value<100){
		alert("充值金额100元起！")
		Amount.focus();
		return false;
		}
	}else{
		if( Number(Amount.value) < Number(Order_CZAmount.value)){
		alert("充值金额"+Order_CZAmount.value+"元起！")
		Amount.focus();
		return false;
		}
	}
	
	
	
	document.myform.method="post";
	document.myform.action="/pay/?action=pay" 
	document.myform.target="_blank"
	document.myform.submit();
	return false;
	
}

function checkPassUser(){
	var htmlout=""
	var pass=document.myform.Pass;
	var pass1=document.myform.Pass1;
	var pass2=document.myform.Pass2;

	html_zt=0;
	if(pass.value==""){
	htmlout="\n请输入旧密码！\n"
	html_zt=1;
	}
	
	html_zt1=0;
	if (pass1.value==""){
	htmlout=htmlout+"\n请输入新密码！\n"
	html_zt1=1;
	}
	
	html_zt2=0;
	html_zt3=0;
	if (pass2.value==""){
	htmlout=htmlout+"\n请输入新密码！\n"
	html_zt2=1;
	}else{
		if (pass2.value!=pass1.value){
		htmlout=htmlout+"\n新密码和验证密码不相符！\n"
		html_zt3=1;
	}
	}
	
	if ( html_zt==1 || html_zt1==1 || html_zt2==1 || html_zt3==1 ){
	alert(htmlout)
	return false;
	}
	
	document.getElementById("sms_On").style.display="none";
	document.getElementById("sms_Off").style.display="";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	var Posthttp="action=UserPass&Pass="+pass.value+"&Pass1="+pass1.value;
	xmlhttp.open("post","/program/index.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
			aa=xmlhttp.responseText;
				if (aa=="请先登录！"){
					alert("请先登录！");
					top.location.href='/Login.shtml';
					return false;
				}
				if (aa=="密码修改成功！"){				
					alert("密码修改成功！")
					pass.value=""
					pass1.value=""
					pass2.value=""
				}else{				
					alert(aa)
				}
					
				document.getElementById("sms_On").style.display="";
				document.getElementById("sms_Off").style.display="none";
			}
			else
			{ alert("网络链接失败！");;
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(Posthttp); 
	return false;
}

function checkPasslogin(){
	var htmlout=""
	var UserName=document.myform.UserName;
	var Mob=document.myform.Mob;
	var verifycode=document.myform.verifycode;

	html_zt=0;
	if(UserName.value==""){
	htmlout="\n请输入您的用户名！\n"
	html_zt=1;
	}
	
	
	html_zt1=0;
	if (Mob.value==""){
	htmlout=htmlout+"\n请输入您的手机号码！\n"
	html_zt1=1;
	}
	
	html_zt2=0;
	if (verifycode.value.length!=4){
	htmlout=htmlout+"\n请输入校验码！\n"
	html_zt2=1;
	}
		
	if ( html_zt==1 || html_zt1==1 || html_zt2==1 ){
	alert(htmlout)
	return false;
	}
	
	document.getElementById("button").disabled="disabled";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	var Posthttp="action=PassLogin&UserName="+encodeURIComponent(UserName.value)+"&Mob="+Mob.value+"&verifycode="+verifycode.value;
	xmlhttp.open("post","/program/PassLogin.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
			aa=xmlhttp.responseText;
				if (aa=="密码重置成功"){				
					alert("密码重置成功，新密码已经发送您的手机上，请接收！")
					top.location.href='/Login.shtml';
				}else{
					alert(aa)
				}
				document.getElementById("button").disabled="";
			}
			else
			{ alert("网络链接失败！");
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(Posthttp); 
	return false;
}

function checkKeyUser(){

	var CheckMail = /^([a-zA-Z0-9_-])+/;
	var Key = document.getElementById("Key");
	var KeyOld = document.getElementById("KeyOld");
	if(Key.value.length<10){
		alert("接口密钥太短，建议20个数字+字母以上！");
		return false;
	}else{
		Chnet_K=1;
		bString = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		for(i = 0; i < Key.value.length; i ++)
		{
			if (bString.indexOf(Key.value.substring(i,i+1))==-1)
			{
				Chnet_K=0;
			}
		}		
		
		if(Chnet_K==0){
		alert("密钥只能为数字或字母！");
		return false;
		}
	}
	
	if(Key.value==KeyOld.value){
		alert("密钥修改成功！");
		return false;
	}
	
	document.getElementById("sms_On").style.display="none";
	document.getElementById("sms_Off").style.display="";
	
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	var Posthttp="action=UserKey&Key="+Key.value;
	xmlhttp.open("post","/program/UserKey.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
			aa=xmlhttp.responseText;
				if (aa=="请先登录！"){
					alert("请先登录！");
					top.location.href='/Login.shtml';
				}else{
					alert(aa)
				}
				document.getElementById("sms_On").style.display="";
				document.getElementById("sms_Off").style.display="none";
			}
			else
			{ alert("网络链接失败！");;
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(Posthttp); 
	return false;
}

var timer2=null
function LayerOn(str){ 
	//timer2=window.setInterval("reinitIframe()", 200);
	document.getElementById("bodyly").style.display="";   
	document.getElementById("bodyly").style.width=document.body.clientWidth+"px";   
	document.getElementById("bodyly").style.height=document.body.clientHeight+"px"; 		
	document.getElementById("bodyly0").style.display='block'; 
	document.getElementById("bodyly0").style.top=80+"px";   
	document.getElementById("bodyly0").style.left=document.body.clientWidth/2-470+"px"; 
	//document.getElementById("my_frame").src="kehu.asp";
	var xmlhttp;
	try{xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");}
	catch(e){
		try{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
		catch (e){ 
			try{xmlhttp=new XMLHttpRequest();}
			catch (e){}		}
	}
	xmlhttp.open("post","/user/kehu.asp?t=" + new Date().getTime());
	xmlhttp.onreadystatechange=function()
	{
		if(4==xmlhttp.readyState)
		{
			if(200==xmlhttp.status)
			{
			aa=xmlhttp.responseText;
			document.getElementById("Kehu").innerHTML=aa;
			}
			else
			{ alert("网络链接失败！");;
			return false;}	
		}
	}
	xmlhttp.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
	xmlhttp.send(); 
	return false;
	}
	
	
function LayerOff(){ 
	window.clearInterval(timer2);
	document.getElementById("bodyly").style.display="none";
	document.getElementById("bodyly0").style.display='none';
	//document.getElementById("my_frame").src=""
}

function LoadingOn(){   
	document.getElementById("Loading").style.display='block'; 
	document.getElementById("Loading").style.top=document.body.scrollTop+(document.body.clientHeight/2-100)+"px";   
	document.getElementById("Loading").style.left=document.body.clientWidth/2-125+"px";  
}

function LoadingOff(){ 
	document.getElementById("Loading").style.display='none';  
}

function reinitIframe(){
	document.getElementById("bodyly").style.display=""; 
	document.getElementById("bodyly").style.width=document.body.clientWidth+"px";   
	document.getElementById("bodyly").style.height=document.body.clientHeight+"px"; 
	document.getElementById("bodyly0").style.display='block'; 		
}
var dragobject={
z: 0, x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
initialize:function(){
document.onmousedown=this.drag
document.onmouseup=function(){this.dragapproved=0}
},
drag:function(e){
var evtobj=window.event? window.event : e
this.targetobj=window.event? event.srcElement : e.target
if (this.targetobj.className=="drag"){
this.dragapproved=1
if (isNaN(parseInt(this.targetobj.style.left))){this.targetobj.style.left=0}
if (isNaN(parseInt(this.targetobj.style.top))){this.targetobj.style.top=0}
this.offsetx=parseInt(this.targetobj.style.left)
this.offsety=parseInt(this.targetobj.style.top)
this.x=evtobj.clientX
this.y=evtobj.clientY
if (evtobj.preventDefault)
evtobj.preventDefault()
document.onmousemove=dragobject.moveit
}
},
moveit:function(e){
var evtobj=window.event? window.event : e
if (this.dragapproved==1){
this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px"
this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px"
return false
}
}
}
dragobject.initialize()