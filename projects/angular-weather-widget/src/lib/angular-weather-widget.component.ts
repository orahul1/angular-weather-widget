import { Component, OnInit, Input } from '@angular/core';
import { AngularWeatherWidgetService } from './angular-weather-widget.service';

@Component({
  selector: 'angular-weather-widget',
  templateUrl: 'angular-weather-widget.component.html',
  styleUrls: ['angular-weather-widget.component.scss']
})
export class AngularWeatherWidgetComponent implements OnInit {
  @Input() APIKEY: any;
  @Input() height: string;
  @Input() width: string;
  @Input() backgroundColor: string;
  @Input() isBoxShadow: boolean;
  @Input() borderRadius: string;
  @Input() locationFontSize: string;
  @Input() locationFontColor: string;
  @Input() status: boolean;
  @Input() statusFontColor: string;
  @Input() statusFontSize: String;
  @Input() temperature: string;
  @Input() isDegree: boolean;
  @Input() isFahrenheit: boolean;
  @Input() tempratureFontColor: string;
  @Input() tempratureFontSize: string;
  @Input() weatherImages: boolean;
  @Input() weatherImageWidth: string;
  @Input() weatherImageHeight: string;
  @Input() geoLocation: boolean;
  @Input() location: any;
  @Input() isWind: boolean;
  @Input() windFontColor: string;
  @Input() windFontSize: string;
  @Input() isWindKPH: boolean;
  @Input() isWindMPH: boolean;

  weatherDetails;
  locationDetails;
  constructor(public ws: AngularWeatherWidgetService) { }

  ngOnInit() {
    this.checkLocation();
  }

  checkLocation() {
    // if enabled geolocation
    if (this.geoLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          this.location = lat + ',' + long;
          this.getWeather();
        });
      } else {
        console.log('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
      }
    } else if (!this.geoLocation && this.location.length < 1) {
      console.log('Provide  a valid location');
    } else {
      this.getWeather();
    }
  }

  getWeather() {
    if (this.APIKEY) {
      this.ws.getWeatherDetails(this.location, this.APIKEY).subscribe(response => {
        this.weatherDetails = response.current;
        this.locationDetails = response.location;
      }, err => {
        console.log(err);
      })
    } else {
      console.log('Invalid APIKEY');
    }
  }

}
