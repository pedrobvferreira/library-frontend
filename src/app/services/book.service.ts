import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BooksDTO } from '../models/books.dto';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = '/api/books';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BooksDTO[]> {
    return this.http.get<BooksDTO[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<BooksDTO> {
    return this.http.get<BooksDTO>(`${this.apiUrl}/${id}`);
  }

  createBook(book: BooksDTO): Observable<BooksDTO> {
    return this.http.post<BooksDTO>(this.apiUrl, book);
  }

  updateBook(id: number, book: BooksDTO): Observable<BooksDTO> {
    return this.http.put<BooksDTO>(`${this.apiUrl}/${id}`, book);
  }

  deleteBook(id: number): Observable<BooksDTO> {
    return this.http.delete<BooksDTO>(`${this.apiUrl}/${id}`);
  }
}
