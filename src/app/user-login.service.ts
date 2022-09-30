import { EventEmitter, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService implements CanActivate {
  isLoggedIn = false;
  currUser: string;

  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return true;
  }

  logIn(currUser: string) {
    this.isLoggedIn = true;
    this.currUser = currUser;
  }

  logOut() {
    this.isLoggedIn = false;
    this.currUser = '';
  }
}
