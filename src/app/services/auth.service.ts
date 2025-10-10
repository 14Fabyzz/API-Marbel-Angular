import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private _isLogged = false;

  isLoggedIn(): boolean {
    return this._isLogged;
  }
  
  login() {
    this._isLogged = true;
  };

  logout() {
    this._isLogged = false;
  }
  
}
