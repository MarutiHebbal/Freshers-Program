import { Component, OnInit } from '@angular/core';
import{ RouterModule,Routes}from '@angular/router'
import { EducationComponent } from '../education/education.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
    public onclick:boolean=true;
    form: FormFields = new FormFields() ;
    form1: FormFields1 = new FormFields1();
  constructor() { }




  ngOnInit() {
  }

  

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
