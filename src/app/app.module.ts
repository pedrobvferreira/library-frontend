import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
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
    LoginComponent,
    UserListComponent,
    UserFormComponent,
    BookListComponent,
    BookFormComponent,
    RentalListComponent,
    RentalFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, UserService, BookService, RentalService, provideHttpClient(withFetch())],
  bootstrap: []
})
export class AppModule { }
