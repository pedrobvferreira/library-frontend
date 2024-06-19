import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';
import { BookListComponent } from './components/books/book-list/book-list.component';
import { BookFormComponent } from './components/books/book-form/book-form.component';
import { RentalListComponent } from './components/restals/rental-list/rental-list.component';
import { RentalFormComponent } from './components/restals/rental-form/rental-form.component';
import { appRoutes } from './app.routes';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { RentalService } from './services/rental.service';

@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    UserFormComponent,
    BookListComponent,
    BookFormComponent,
    RentalListComponent,
    RentalFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService, UserService, BookService, RentalService],
  bootstrap: []
})
export class AppModule { }
