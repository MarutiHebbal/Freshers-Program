window.onload=function () {
	'use strict'
	var msg=document.getElementById('msg');
	function Employee(name,lname,dob,sex,add,city,st,cnt,pin,mno){
		this.Firstname=name;
		this.Lastname=lname;
		this.DOB=dob;
		this.Sex=sex;
		this.Add=add;
		this.City=city;
		this.State=st;
		this.Country=cnt;
		this.Pin=pin;
		this.Mobile=mno;

	}
	function Employeer(n,ad,ws,ci,sta,pi){
		this.Firstname=n;
		this.Add=ad;
		this.Website=ws;
		this.City=ci;
		this.State=sta;
		this.Pincode=pi;

	}
	var mar = new Employee('Maruti','hebbal',8-5-1995,'M','Koppal','Koppal','kar','india',583231,1234);
	//msg.value=mar;
	console.log(mar);
	//document.write(mar.value);
}
