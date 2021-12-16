import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected URLV1: string = environment.url;

  getHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-rapidapi-host': environment.xRapidApiHost,
        'x-rapidapi-key': environment.xRapidApiKey,
      })
    };
  }

  protected extractData(response: any) {
    return response.data || [];
  }

}
