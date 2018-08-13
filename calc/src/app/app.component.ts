import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
public output:any='';
public num1:string='0';
public num2:number;
public val:string;
clear(){
  this.output="";
}
  updateOutput(string){
  //this.num1+=string;

  this.output+=string;
  //console.log(this.output);
   }
   MUL(){

    this.val=this.output;
    this.output='';
    this.num2=3;
   }
   subtract(){
    this.val=this.output;
    this.output='';
    this.num2=2;

   }
   DIV(){
    this.val=this.output;
    this.output='';
    this.num2=4;

   }
   add(){
     this.val=this.output;
     this.output='';
     this.num2=1;
     }
     calculate(){
       switch(this.num2){
       case 1:this.output=Number(this.output)+Number(this.val);
       break;
       case 2:this.output=Number(this.val)-Number(this.output);break;
       case 3:this.output=Number(this.output)*Number(this.val);break;
       case 4:this.output=Number(this.output)/Number(this.val);break;
       }
     }
 

}
