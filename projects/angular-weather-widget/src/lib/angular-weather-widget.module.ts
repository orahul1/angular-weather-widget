import { NgModule } from '@angular/core';
import { AngularWeatherWidgetComponent } from './angular-weather-widget.component';
import { CommonModule } from '@angular/common';
import { AngularWeatherWidgetService } from './angular-weather-widget.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AngularWeatherWidgetComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AngularWeatherWidgetComponent],
  providers: [AngularWeatherWidgetService]
})
export class AngularWeatherWidgetModule { }
