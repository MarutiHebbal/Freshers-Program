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
   public  form: FormFields = new FormFields() ;
    public form1: FormFields1 = new FormFields1();
   
  constructor() { }

  changedValue(item){
    this.form.itemList=item;
    console.log(item);
     }    
     fun(){
      this.form.option=!this.form.option;
     }       
     


  ngOnInit() {
  }

  

}


 class FormFields {
  first_name: string;
  first_lname: string;
  country:string;
  City:string;
  Pin:number;
  itemList:string;
  Address:string;
  State:string;
  option:boolean=true;
  radio1:string;
  radio2:string;
  radio3:string;
 
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
