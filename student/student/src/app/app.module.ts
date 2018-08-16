import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule,Routes }from '@angular/router'
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { EducationComponent } from './education/education.component';
import {routes} from './app.router';
import{FormsModule}from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
