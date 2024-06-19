import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RentalService } from '../../../services/rental.service';
import { RentalsDTO } from '../../../models/rentals.dto';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  rental: RentalsDTO = {
    id: 0,
    user: null,
    book: null,
    rentalDate: '',
    returnDate: null
  };
  userId: number | null = null;
  bookId: number | null = null;
  rentalId: number | null = null;
  isReturn: boolean = false;

  constructor(
    private rentalService: RentalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.rentalId = +params.get('id')!;
        this.userId = +params.get('userId')!;
        this.bookId = +params.get('bookId')!;
  
        if (this.rentalId) {
          this.isReturn = true;
          this.rentalService.returnBook(this.rentalId).subscribe(rental => this.rental = rental);
        }
      });
  }

  save(): void {
    if (this.isReturn) {
      this.rentalService.returnBook(this.rentalId!).subscribe(() => {
        this.router.navigate(['/rentals']);
      });
    } else {
      this.rentalService.rentBook(this.userId!, this.bookId!).subscribe(() => {
        this.router.navigate(['/rentals']);
      });
    }
  }

}
