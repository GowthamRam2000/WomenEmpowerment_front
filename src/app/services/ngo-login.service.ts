import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NgoLoginService {
  username: string;
  isLoggedIn: boolean;

  constructor() {}

  login(username: string) {
    this.isLoggedIn = true;
    this.username = username;
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
  }

  getCurrUser(): string {
    return this.username;
  }
}
