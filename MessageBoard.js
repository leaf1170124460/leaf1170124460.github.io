function showMessage(){
	var messageBox=document.getElementById("messageBox").value;
	var nameBox=document.getElementById("nameBox").value;
	var message=document.getElementById("message");
	var name=document.getElementById("name");
	var time=document.getElementById("time");
	var date=new Date();
	var curTime=date.toLocaleString();
	var messageString="<h3><em>"+messageBox+"<em></h3>";
	message.innerHTML=messageString;
	var nameString="<h3><em>"+nameBox+"</em></h3>";
	name.innerHTML=nameString;
	var timeString="<h3><em>"+curTime+"</em></h3>";
	time.innerHTML=timeString;
}