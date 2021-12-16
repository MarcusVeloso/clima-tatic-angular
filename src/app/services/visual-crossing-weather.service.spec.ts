import { TestBed } from '@angular/core/testing';

import { VisualCrossingWeatherService } from './visual-crossing-weather.service';

describe('VisualCrossingWeatherService', () => {
  let service: VisualCrossingWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualCrossingWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
