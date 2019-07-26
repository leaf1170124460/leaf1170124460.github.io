function showMessage(){
	var messageBox=document.getElementById("messageBox");
	var nameBox=document.getElementById("nameBox");
	var message=document.getElementById("message");
	var name=document.getElementById("name");
	var time=document.getElementById("time");
	var date=new Date();
	var curTime=date.toLocaleString();
	message.firstChild.nodeValue=messageBox.value;
	name.firstChild.nodeValue=nameBox.value;
	time.firstChild.nodeValue=curTime;
}

function prepareLinks(){
	if(!document.getElementById){
		alert("Sorry, your browser dosen't support javascript.");
		return false;
	}
	var button=document.getElementById("submit");
	button.onclick=function(){
		showMessage();
		return false;
	}
}

window.onload=prepareLinks;


