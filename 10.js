window.onload = function() {
var button = document.getElementById("btn");
var uname = document.getElementById("name");
button.onclick = function() {
	var v=uname.value;
//	var i=1;
	var next,befor,f=1;
//	var x=1;
	if(uname.value==2)
	{
		befor=1;
		next=3;
	}else if(uname.value==3){
		befor=2;
		next=5;
	}else{
  		while(1){
			++v;
			if((v%2!=0) || (v%3!=0))
			{
			
				next=v;
			
				break;
			}
		

			}
	
	 		z=uname.value;
			while(1){
			--z;
			if((z%2!=0) || (z%3!=0))
			{
				if(z<=0)
				{
					befor="Cant find";
					break;
				}else{
					befor=z;
			
					break;
				}
		
			}
		}
	}
	alert("Nearest befor Prime\n"+befor);
	alert("Nearest Next Prime\n"+next);
}
}
