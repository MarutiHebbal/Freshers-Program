import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {forkJoin,observable, Observer, Observable} from 'rxjs';
import {Config} from './config';
import { providerDef } from '@angular/core/src/view';
import { copyStyles } from '@angular/animations/browser/src/util';



@Injectable({
    providedIn: 'root'
})
export class Configservices {
    constructor(private http: HttpClient) {}
    public url1: string = './assets/config.json';
   public getemlpoyee(data): Observable<Config[]> {
     const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
     };
        return this.http.post<Config[]>(this.url1 , {'data': data}, httpOption);

    }
}
