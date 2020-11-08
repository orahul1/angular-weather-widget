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
  @Input() width: string = '425px';
  @Input() backgroundColor: string = 'rgb(10 10 111)';
  @Input() isBoxShadow: boolean = true;
  @Input() borderRadius: string = '5px';
  @Input() locationFontSize: string = '40px';
  @Input() locationFontColor: string = '#fff';
  @Input() status: boolean = true;
  @Input() statusFontColor: string = '#fff';
  @Input() statusFontSize: String = '18px';
  @Input() temperature: Boolean = true;
  @Input() tempratureFontColor: string = '#fff';
  @Input() tempratureFontSize: string = '80px';
  @Input() weatherImages: boolean = true;
  @Input() weatherImageWidth: string = '100px';
  @Input() weatherImageHeight: string = '100px';
  @Input() geoLocation: boolean = false;
  @Input() location: any = '';
  @Input() isWind: boolean = true;
  @Input() isHumidity: boolean = true;
  @Input() windFontColor: string = '#fff';
  @Input() windFontSize: string = '20px';
  @Input() humidityFontColor: string = '#fff';
  @Input() humidityFontSize: string = '20px';
  isLoading: boolean = true;
  weatherDetails = {
    location : '',
    weather_descriptions: '',
    temperature: '',
    icon: '',
    wind_speed: '',
    humidity: ''
  };
  constructor(public ws: AngularWeatherWidgetService) { }

  ngOnInit() {
    this.checkLocation();
  }

  /**
   *@description Check whether geolocation or manually added location.
   */

  checkLocation() {
    if (this.geoLocation) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          this.location = `lat=${lat}&lon=${long}`;
          this.getWeather(true);
        }, (error) => {
          console.warn(error.message);
        });
      } else {
        console.warn(`It seems like Geolocation, which is required for this page, is not enabled in your browser.
        Please use a browser which supports it.`);
      }
    } else if (!this.geoLocation && this.location.length < 1) {
      console.warn('Provide  a valid location');
    } else {
      this.getWeather(false);
    }
  }

  getWeather(isGeoLocation) {
    if (this.APIKEY) {
      this.ws.getWeatherDetails(isGeoLocation,this.location, this.APIKEY).subscribe(response => {
        this.weatherDetails = {
          location : response.name,
          weather_descriptions: response.weather[0].description,
          temperature: response.main.temp,
          icon: `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`,
          wind_speed: response.wind.speed,
          humidity: response.main.humidity
        };
        this.isLoading = false;
      }, err => {
        console.warn(err.error.error.message);
      })
    } else {
      console.warn('Invalid APIKEY');
    }
  }
}

