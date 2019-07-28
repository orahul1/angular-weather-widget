import { TestBed } from '@angular/core/testing';

import { AngularWeatherWidgetService } from './angular-weather-widget.service';

describe('AngularWeatherWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularWeatherWidgetService = TestBed.get(AngularWeatherWidgetService);
    expect(service).toBeTruthy();
  });
});
