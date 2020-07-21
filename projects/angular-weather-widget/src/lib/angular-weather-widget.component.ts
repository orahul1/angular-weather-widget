import { Component, OnInit, Input } from '@angular/core';
import { AngularWeatherWidgetService } from './angular-weather-widget.service';

@Component({
  selector: 'angular-weather-widget',
  templateUrl: 'angular-weather-widget.component.html',
  styleUrls: ['angular-weather-widget.component.scss']
})
export class AngularWeatherWidgetComponent implements OnInit {
  @Input() APIKEY: any;
  @Input() height: string = 'auto';
  @Input() width: string = '280px';
  @Input() backgroundColor: string = 'rgb(150 180 228)';
  @Input() isBoxShadow: boolean = true;
  @Input() borderRadius: string = '5px';
  @Input() locationFontSize: string = '40px';
  @Input() locationFontColor: string = '#fff';
  @Input() status: boolean = true;
  @Input() statusFontColor: string = '#fff';
  @Input() statusFontSize: String = '18px';
  @Input() temperature: Boolean = true;
  @Input() isDegree: boolean = true;
  // @Input() isFahrenheit: boolean = false;
  @Input() tempratureFontColor: string = '#fff';
  @Input() tempratureFontSize: string = '80px';
  @Input() weatherImages: boolean = true;
  @Input() weatherImageWidth: string = '100px';
  @Input() weatherImageHeight: string = '100px';
  @Input() geoLocation: boolean = true;
  @Input() location: any = '';
  @Input() isWind: boolean = true;
  @Input() windFontColor: string = '#fff';
  @Input() windFontSize: string = '20px';
  @Input() isWindKPH: boolean = true;
  // @Input() isWindMPH: boolean = false;

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
        console.log(response)
        this.weatherDetails = response.current;
        this.locationDetails = response.location;
      }, err => {
        console.log(err.error.error.message);
      })
    } else {
      console.log('Invalid APIKEY');
    }
  }

}
