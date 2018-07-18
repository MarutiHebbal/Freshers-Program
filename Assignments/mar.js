window.onload = function() {
  var button = document.getElementById("btn");
button.onclick =function() {
    var str = document.getElementById("name");
    var a = str.value;
    var i, j, flag = 1;
    var arr = [];
    for (i = 0 ; i < a.length; i++) {
  		arr[a.charAt(i)] = 0;
    }
    for (i = 0 ; i < a.length; i++) {
  		arr[a.charAt(i)] += 1;
    }
     for (i = 0 ; i < a.length; i++) {
     	if(arr[a.charAt(i)] == 1){
     		flag = 0;
  		alert(a.charAt(i));
  		break;
  	}
    }
if(flag)alert(" All Charecters are Repeated")
}
}