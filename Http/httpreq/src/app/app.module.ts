import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { config } from 'rxjs';
import { configservices } from './config.service';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,BrowserAnimationsModule,FormsModule,MatButtonModule, MatCheckboxModule,MatProgressSpinnerModule

  ],
  providers: [configservices],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class ProgressSpinnerOverviewExample {}
