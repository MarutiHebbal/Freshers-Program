import { Injectable } from '@angular/core';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor() { }
  public formdata:any={
    first_name: '',
    first_lname: '',
    country:'',
    City:'',
    Pin:'',
    itemList:'',
    Address:'',
    State:'',
    option:''
  }
setformdata(data){
  this.formdata=data;

}
getformdata(){
  return this.formdata;
}
}
