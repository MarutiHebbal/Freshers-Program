	function day(){
			  var d = new Date(document.getElementById("res").value);
    var weekDays = new Array(7);
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"];
    var n = weekDays[d.getDay()];
    document.getElementById("demo").innerHTML = n;
}