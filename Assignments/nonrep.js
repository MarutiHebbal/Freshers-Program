function nonRep(){
	var output = document.getElementById("output");
	var text = document.getElementById("text").value;

	var s = text.split("");
	var counter = 0;
	var result = '';

	for(var i = 0; i < s.length; i++){
		 counter = 0;

		for(var j = 0; j < s.length; j++){
			if(s[i] === s[j]){
				counter += 1;
			}
		}
		if(counter < 2){
			result =  s[i];
			break;
		}
	}
	output.innerHTML = result;
}			




