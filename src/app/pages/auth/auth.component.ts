import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  apiKeyFormControl: FormControl;

  constructor(private authService: AuthService) {
    this.apiKeyFormControl = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  saveApiKey(): void {
    if (!this.apiKeyFormControl.valid) {
      return;
    }

    this.authService.saveApiKey(this.apiKeyFormControl.value);
  }
}
