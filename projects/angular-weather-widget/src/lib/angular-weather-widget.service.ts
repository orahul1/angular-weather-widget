import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from './config';

@Injectable({
  providedIn: 'root'
})
export class AngularWeatherWidgetService {

  constructor(public http: HttpClient) { }

  getWeatherDetails(location, APIKEY) : Observable <any> {
   return this.http.get(API + APIKEY + '&query=' + location);
  }
}
