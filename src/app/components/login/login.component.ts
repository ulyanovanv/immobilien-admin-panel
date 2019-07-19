import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { LoginService } from '../../services/login.service';

import login from '../../classes/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  checkoutForm;
  isLoginError = false;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      user: '',
      password: ''
    });
  }

  ngOnInit() {
    if (this.loginService.loginStatus) {
      this.router.navigate(['/home']);
    }
  }

  login(use: string, password: string) {
    this.loginService.setLoginStatus(use, password);
    this.router.navigate(['/home']);
  }

  checkLoginData(customerData) {
    const loginData = this.http.get<login[]>('/assets/login.json')
      .subscribe(x => {
          const isLoginRight = x.filter(it => it.user === customerData.user && it.password === customerData.password).length;
          if (isLoginRight) {
            this.login(customerData.user, customerData.password);
          } else {
            this.isLoginError = true;
          }
        }
      );

    this.checkoutForm.reset();
  }
}
