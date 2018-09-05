import { Component, OnInit } from '@angular/core';
import {configservices} from './config.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
},
)
export class AppComponent implements OnInit {
  public employee = [];
  Name: string;
constructor(private services: configservices) {}
ngOnInit() {
  this.services.getemlpoyee()
  .subscribe(data => this.employee = data);
}
public Add() {
  console.log('clickedADD ');
  const data = {first_name: this.Name };
  this.services.getemlpoyee(data).subscribe((response: any)=>{
    console.log('response', response);
    if ( response.success) {
      alert(response.message);
    }
  });
}
Read() {


}
Del() {


}
}
