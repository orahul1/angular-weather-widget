import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from './config';

@Injectable({
  providedIn: 'root'
})
export class AngularWeatherWidgetService {

  constructor(public http: HttpClient) { }

  getWeatherDetails(isGeoLocation, location, APIKEY) : Observable <any> {
    if(isGeoLocation){
      return this.http.get(`${API}${location}&units=imperial&appid=${APIKEY}`);
    }else{
      return this.http.get(`${API}q=${location}&units=imperial&appid=${APIKEY}`);
    }
  }
}
