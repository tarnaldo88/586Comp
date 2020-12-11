import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];
  public bookList: Books[];

  constructor(http: HttpClient, @Inject('http://54.67.104.178/Server/api/Books') baseUrl: string) {
    // http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    //   this.forecasts = result;
    // }, error => console.error(error));
    http.get<Books[]>(baseUrl + 'Books').subscribe(result => {
      this.bookList = result;
    }, error => console.error(error));
  }
}

export class ShowApiComponent implements OnInit {
  constructor(private http : HttpClient){

  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface Books {
  AuthorId: string;
  Title: string;
  Price: number;
}
