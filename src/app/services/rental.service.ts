import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalsDTO } from '../models/rentals.dto';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private apiUrl = 'http://localhost:9091/api/rentals';

  constructor(private http: HttpClient) { }

  getRentalById(id: number): Observable<RentalsDTO> {
    return this.http.get<RentalsDTO>(`${this.apiUrl}/${id}`);
  }
  
  getAllRentals(): Observable<RentalsDTO[]> {
    return this.http.get<RentalsDTO[]>(this.apiUrl);
  }

  rentBook(userId: number, bookId: number): Observable<RentalsDTO> {
    return this.http.post<RentalsDTO>(`${this.apiUrl}/rent`, { userId, bookId });
  }

  returnBook(rentalId: number): Observable<RentalsDTO> {
    return this.http.put<RentalsDTO>(`${this.apiUrl}/return/${rentalId}`, null);
  }
}
