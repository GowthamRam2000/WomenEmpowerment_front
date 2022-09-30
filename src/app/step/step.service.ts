import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  baseUrl: string = 'http://localhost:8080/WomenApp';

  constructor(private http: HttpClient) {}

  isValidUser(user: { username: string; password: string }) {
    return this.http.post<boolean>(this.baseUrl + '/login', user);
  }

  addNewUser(obj: User) {
    return this.http.post<User>(this.baseUrl + '/user-registration', obj);
  }

  isUsernameExists(username: string) {
    return this.http.get<boolean>(this.baseUrl + '/user-present/' + username);
  }
}
