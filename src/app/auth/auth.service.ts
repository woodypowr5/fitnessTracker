import { Injectable } from '@angular/core';
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor() { }

  registerUser(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000);
    };
    this.authChange.next(true);
  }

  login(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000);
    };
    this.authChange.next(true);
  }

  logout(){
    this.user = null;
    this.authChange.next(false);
  }

  getUser(){
    return { ...this.user }; // don't pass this.user by reference, return a new user instead
  }

  isAuth(){
    return this.user !== null;
  }

}
