import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersDTO } from '../models/users.dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsersDTO[]> {
    return this.http.get<UsersDTO[]>(this.apiUrl);
  }

  getUserById(id: number): Observable<UsersDTO> {
    return this.http.get<UsersDTO>(`${this.apiUrl}/${id}`);
  }

  createUser(user: UsersDTO): Observable<UsersDTO> {
    return this.http.post<UsersDTO>(this.apiUrl, user);
  }

  updateUser(id: number, user: UsersDTO): Observable<UsersDTO> {
    return this.http.put<UsersDTO>(`${this.apiUrl}/${id}`, user);
  }

  deactivateUser(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/deactivate/${id}`, null);
  }
}
