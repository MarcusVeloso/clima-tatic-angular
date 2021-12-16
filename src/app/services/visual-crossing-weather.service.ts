import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class VisualCrossingWeatherService extends BaseService {
  constructor(private http: HttpClient) {
    super();
  }

  getWeatherForecastData(): Observable<any[]> {
    return this.http.get<any[]>(
      this.URLV1 +
        'forecast?' +
        'aggregateHours=1&location=Araguaína,TO,BRAZIL&contentType=json&unitGroup=metric&shortColumnNames=false',
      this.getHeaderJson()
    );
  }

  getHistoricalWeatherRecord() {}
}
