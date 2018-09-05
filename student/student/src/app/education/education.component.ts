import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public form1: FormFields1 = new FormFields1();
  constructor() { }

  ngOnInit() {
  }
 
   
    //blisterPackTemplates=[{id:1,name:"a"},{id:2,name:"b"},{id:3,name:"c"}]

    

}

class FormFields {
  first_name: string;
  first_lname: string;
  country:string;
  City:string;
  Pin:number;
  Address:string;
  State:string;
 
}
class FormFields1 {
  t1:string;
  t2:string;
  t3:string;

  t11:string;
  t12:string;
  t13:string;

  g1:string;
  g2:string;
  g3:string;

  m1:string;
  m2:string;
  m3:string;
}