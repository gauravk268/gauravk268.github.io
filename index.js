var cert = document.getElementById("certificates");
cert.style.display = "none";
var open = -1;

function showCert(){
	if(open == -1)
	{

		cert.style.display = "block";
		open = open^1;
	}
	else
	{
		cert.style.display = "none";
		open = open^1;
	}
}