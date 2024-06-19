import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdmin: boolean = false;
  isUser: boolean = false;
  isLoggedIn: Observable<boolean> = of(false);

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    const profile = this.authService.getUserProfile();
    this.updateUserRoles();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  updateUserRoles(): void {
    this.isUser = this.authService.isUser();
    this.isAdmin = this.authService.isAdmin();
  }

  logout(): void {
    this.authService.logout();
    this.updateUserRoles();
  }
}
