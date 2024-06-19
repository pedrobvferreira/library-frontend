import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userProfile: 'ANONYMOUS' | 'USER' | 'ADMIN' = 'ANONYMOUS';

  constructor() { }

  setUserProfile(profile: 'ANONYMOUS' | 'USER' | 'ADMIN'): void {
    this.userProfile = profile;
  }

  getUserProfile(): 'ANONYMOUS' | 'USER' | 'ADMIN' {
    return this.userProfile;
  }
}
