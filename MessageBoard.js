function showMessage(){
	var messageBox=document.getElementById("messageBox").value;
	var nameBox=document.getElementById("nameBox").value;
	var message=document.getElementById("message");
	var name=document.getElementById("name");
	var time=document.getElementById("time");
	var date=new Date();
	var curTime=date.toLocaleString();
	var messageString="<br /><h3>"+messageBox+"</h3><br />";
	message.innerHTML=messageString;
	var nameString="<br /><h3>"+nameBox+"</h3><br />";
	name.innerHTML=nameString;
	var timeString="<br /><h3>"+curTime+"</h3><br />";
	time.innerHTML=timeString;
}