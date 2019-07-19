import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginStatus = false;

  constructor() { }

  setLoginStatus(user: string, password: string) {
    this.loginStatus = !this.loginStatus;
    window.localStorage.setItem('user', user);
    window.localStorage.setItem('password', password);
  }

  getLoginStatus() {
    return this.loginStatus;
  }

  deleteLoginData() {
    this.loginStatus = !this.loginStatus;
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('password');
  }
}
