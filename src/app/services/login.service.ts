import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn = false;

  constructor() { }

  login(username?: string, password?: string): Observable<boolean> {
    if (password === '123') {
      this.loggedIn = true;
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    this.loggedIn = false;
  }

  isLogged(): boolean {
    return this.loggedIn;
  }
}