import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookFormComponent } from './components/books/book-form/book-form.component';
import { RentalListComponent } from './components/restals/rental-list/rental-list.component';
import { RentalFormComponent } from './components/restals/rental-form/rental-form.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/new', component: BookFormComponent },
  { path: 'books/edit/:id', component: BookFormComponent },
  { path: 'rentals', component: RentalListComponent },
  { path: 'rentals/new', component: RentalFormComponent },
  { path: 'rentals/return/:id', component: RentalFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];
