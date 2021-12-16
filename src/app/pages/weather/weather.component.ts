import { Component, OnInit } from '@angular/core';
import { VisualCrossingWeatherService } from 'src/app/services/visual-crossing-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weather: VisualCrossingWeatherService) { }

  ngOnInit(): void {
    this.weather.getWeatherForecastData()
      .subscribe((weather) => {
        console.log(weather);
      });
  }

}
