//
//    Type writer function for Hello!
var pos=0;
var speed=300;
var speed2=85;
var speed3=100
var str=document.getElementById('str').innerText;
document.getElementById('str').innerText='';

function typeWriter(){
	if (pos<str.length) {
		document.getElementById('str').innerHTML += str.charAt(pos);
		pos++;
		setTimeout(typeWriter, speed); 
	}
}
setTimeout(typeWriter, speed);

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

var i=0;
var str1=document.getElementById('str1').innerText;
document.getElementById('str1').innerText='';

function typeWriter1(){
		if (i<str1.length) {
			document.getElementById('str1').innerHTML += str1.charAt(i);
			i++;
			setTimeout(typeWriter1,speed2); 
		}
}
setTimeout(typeWriter1, speed2);

 /////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


var g=0;
var str2=document.getElementById('str2').innerText;
document.getElementById('str2').innerText='';

function typeWriter2(){
		if (g<str2.length) {
			document.getElementById('str2').innerHTML += str2.charAt(g);
			g++;
			setTimeout(typeWriter2,speed3); 
		}
}
setTimeout(typeWriter2, speed3);











