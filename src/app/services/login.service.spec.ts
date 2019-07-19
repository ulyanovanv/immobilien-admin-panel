import {async, TestBed} from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';

class Store {
  user: string = '';
  password: string = '';
}

describe('LoginService', () => {
  let service: LoginService;
  const store = new Store();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = new LoginService();
  });

  beforeEach(() => {
    const mockLocalStorage = {
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    };

    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
  });

  it('LoginService should be created', () => {
    service = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('LoginService.setLoginStatus should log in', () => {
    const user = 'admin';
    const password = '0000';

    service.setLoginStatus(user, password);

    expect(store.user).toBe('admin');
    expect(store.password).toBe('0000');
    expect(service.loginStatus).toBe(true);
  });

  it('LoginService.getLoginStatus should return current loginStatus', () => {
    expect(service.loginStatus).toBe(false);
  });

  it('LoginService.deleteLoginData should log out', () => {
    service.setLoginStatus('admin', '0000');
    service.deleteLoginData();

    expect(store.user).toBeUndefined();
    expect(store.password).toBeUndefined();
    expect(service.loginStatus).toBe(false);
  });
});
