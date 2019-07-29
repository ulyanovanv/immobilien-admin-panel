import { Component, OnInit } from '@angular/core';

import { LoginService} from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit() {
    console.log('here');
    const user: string = window.localStorage.getItem('user');
    const password: string = window.localStorage.getItem('password');

    if (user && password) {
      this.loginService.setLoginStatus(user, password);
    }
  }
}
