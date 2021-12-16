import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor() {
    super();
  }

  saveApiKey(apiKey: string): boolean {
    this.localStorageUtils.saveApiKey(apiKey);
    return true;
  }
}
