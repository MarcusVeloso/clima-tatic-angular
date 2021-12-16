import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageUtils } from '../utils/localStorageUtils';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected URLV1: string = environment.url;
  public localStorageUtils = new LocalStorageUtils();

  getHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-rapidapi-host': environment.xRapidApiHost,
        'x-rapidapi-key': this.localStorageUtils.getApiKey()
      }),
    };
  }

  protected extractData(response: any) {
    return response.data || [];
  }
}
