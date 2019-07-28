import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWeatherWidgetComponent } from './angular-weather-widget.component';

describe('AngularWeatherWidgetComponent', () => {
  let component: AngularWeatherWidgetComponent;
  let fixture: ComponentFixture<AngularWeatherWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWeatherWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
