import { Injectable } from '@angular/core';
import {User} from './user.model';
import { Router } from '@angular/router';
import {AuthData} from './auth-data.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(private router: Router) { }

  registerUser(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000);
    };
    this.authChange.next(true);
    this.authSSuccess();
  }

  login(authData: AuthData){
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000);
    };
    this.authChange.next(true);
    this.authSSuccess();
  }

  logout(){
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser(){
    return { ...this.user }; // don't pass this.user by reference, return a new user instead
  }

  isAuth(){
    console.log(this.user)
    return this.user !== null && this.user !== undefined;
  }

  private authSSuccess(){
    this.router.navigate(['/training']);
  }

}
