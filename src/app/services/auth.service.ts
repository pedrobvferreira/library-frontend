import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userProfile: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'ANONYMOUS';

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor() { }

  login(username: string, password: string): boolean {
    // Simulando login
    if (username === 'admin' && password === 'admin') {
      this.userProfile = 'ADMIN';
      this.loggedIn.next(true);
      return true;
    } else if (username === 'user' && password === 'user') {
      this.userProfile = 'USER';
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
    this.userProfile = 'ANONYMOUS';
  }

  setUserProfile(profile: 'ANONYMOUS' | 'USER' | 'ADMIN'): void {
    this.userProfile = profile;
  }

  getUserProfile(): 'ANONYMOUS' | 'USER' | 'ADMIN' {
    return this.userProfile;
  }

  isUser(): boolean {
    return this.userProfile === 'USER';
  }

  isAdmin(): boolean {
    return this.userProfile === 'ADMIN';
  }
}
