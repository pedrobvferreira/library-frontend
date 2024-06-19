import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UsersDTO } from '../../../models/users.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UsersDTO[] = [];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  editUser(event: Event, id: number): void {
    event.preventDefault();
    console.log(`Navigating to edit user with ID: ${id}`);
    this.router.navigate(['/users/edit', id]);
  }

  deactivateUser(id: number): void {
    this.userService.deactivateUser(id).subscribe(() => {
      this.users = this.users.map(user => user.id === id ? { ...user, active: false } : user);
    });
  }
}
