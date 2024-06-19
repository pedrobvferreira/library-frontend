import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../../services/rental.service';
import { RentalsDTO } from '../../../models/rentals.dto';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {
  rentals: RentalsDTO[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.rentalService.getAllRentals().subscribe(data => {
      this.rentals = data;
    });
  }

  returnBook(id: number): void {
    this.rentalService.returnBook(id).subscribe(() => {
      this.rentals = this.rentals.filter(rental => rental.id !== id);
    });
  }
}
