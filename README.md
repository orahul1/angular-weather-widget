# Angular 2/4/6/8 Weather Widget
[![npm version](https://img.shields.io/npm/v/angular2-weather-widget.svg)](https://www.npmjs.com/package/angular2-weather-widget)
<!-- [![downloads](https://img.shields.io/npm/dt/angular2-weather-widget.svg)](https://www.npmjs.com/package/angular2-weather-widget)
[![license](https://img.shields.io/github/license/cuppalabs/angular2-weather-widget.svg)](https://www.npmjs.com/package/angular2-weather-widget) -->

Angular 2+ Weather Widget component for web applications. Easy and Highly customisable.

<!-- [Demos / Examples](link). -->

## Getting Started


### Installation
- The Weather Widget package is published on the [npm](https://www.npmjs.com/package/angular2-weather-widget) Registry. 
- Install the package :
    `npm install angular2-weather-widget --save`

- Once installed import `AngularWeatherWidgetModule` from the installed package into your module as follows:


### Usage
Import `AngularWeatherWidgetModule` into `NgModule` in `app.module.ts`. Angular's `HttpClientModule` and `CommonModule` is also required.
```js
import { AngularWeatherWidgetModule } from 'angular2-weather-widget';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  // ...
  imports: [
    AngularWeatherWidgetModule,
    FormsModule,
    CommonModule
  ]
  // ...
})
```

- We are using APIUX weather api to get weather details so [SIGNUP](https://www.apixu.com/signup.aspx) and genereate api key for your project.

Add the following component tag in you template (no properties)
```html
<angular-weather-widget
  [APIKEY]="APIKEY">
</angular-weather-widget>

```

Full properties
```html
<angular-weather-widget
  [APIKEY]="APIKEY"
  [width]="'280px'"
  [height]="'auto'"
  [backgroundColor]="'#000'" 
  [isBoxShadow]="true"
  [borderRadius]="'5px'"
  [locationFontSize]="'40px'"
  [locationFontColor]="'#fff'"
  [status]="true"
  [statusFontColor]="'#fff'"
  [statusFontSize]="'18px'"
  [temperature]="'true'"
  [isDegree]="true"
  [isFahrenheit]="false"
  [tempratureFontColor]="'#fff'"
  [tempratureFontSize]="'80px'"
  [weatherImages]="true"
  [weatherImageWidth]="'100px'"
  [weatherImageHeight]="'100px'"
  [geoLocation]="true"
  [location]="''"
  [isWind]="true"
  [isWindKPH]="true"
  [isWindMPH]="false"
  [windFontColor]="'#fff'"
  [windFontSize]="'20px'">
</angular-weather-widget>
```


### Properties
The following list of properties are supported by the component.

| Property         |Type    | Description            | Default Value |
|:--- |:--- |:--- |:--- |
| APIKEY | String | API key from APIUX | 'APIKEY' |
| width | String | Width of the weather card  | '280px' |
| height | String | Height of the weather card | auto |
| backgroundColor | String | Background color of the weather card | '#2a2828' |
| isBoxShadow | Boolean | Box shadow of the weather card | true |
| borderRadius | String | Border-radius of the weather card | 5px |
| locationFontSize | String | Font size of the location text | 40px |
| locationFontColor | String | Color of the location text | #fff |
| status | Boolean | Current weather status | true |
| statusFontSize | String | Font size of the location text | 18px |
| statusFontColor | String |  Color of the status text | #fff |
| temperature | Boolean | Temperature of the location | true |
| tempratureFontSize | String | Font size of the temperature text | 80px |
| tempratureFontColor | String |  Color of the temperature text | #fff |
| isDegree | Boolean | Temperature measure format in Degree | true |
| isFahrenheit | Boolean | Temperature measure format in Fahrenheit  | false |
| weatherImages | Boolean | Weather icon | true |
| weatherImageWidth | String | Weather icon width | 100px |
| weatherImageHeight | String | Weather icon height | 100px |
| geoLocation | Boolean | Access/Show weather of the user's location | true |
| location | String | Show one specific location's weather | '' |
| isWind | Boolean | Wind of the location | true |
| windFontSize | String | Font size of the wind text | 20px |
| windFontColor | String |  Color of the wind text | #fff |
| isWindKPH | Boolean | Wind measure foremat in KPH | true |
| isWindMPH | Boolean | Wind measure foremat in MPH | false |

## Run locally
- Clone the repository or downlod the .zip,.tar files.
- Run `npm install`
- Run `ng serve` for a dev server
- Navigate to `http://localhost:4200/`

## License
MIT License.
