window.onload = function() {
var button = document.getElementById("btn");
var uname = document.getElementById("name");
button.onclick = function() {
	var x=parseInt(uname.value);
console.log(x);
var a=0,b=0,c=0,d=0,e=0,f=0,g=0;
var i=1;
	while(i){
		if(x>=2000){
			a=parseInt(x/2000);
			x=Math.floor(x%2000);
		}else if(x>=500){
			b=parseInt(x/500);
			x=Math.floor(x%500);
		}else if(x>=100){
			c=parseInt(x/100);
			x=Math.floor(x%100);
		}else if(x>=20){
			d=parseInt(x/20);
			x=Math.floor(x%20);
		}else if(x>=10){
			e=parseInt(x/10);
			x=Math.floor(x%10);
		}else if(x>=2){
			f=parseInt(x/2);
			x=Math.floor(x%2);
		}
		else{
			g=Math.floor(x);
			i=0;
		}

	}
	alert("2000rs\t"+a+"\n500rs\t"+b+"\n100rs\t"+c+"\n20s\t"+d+"\n10s\t"+e+"\n2s\t"+f+"\n1s\t"+g)
}
}