import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { RentalService } from '../../../services/rental.service';
import { RentalListComponent } from './rental-list.component';
import { RentalsDTO } from '../../../models/rentals.dto';
import { of } from 'rxjs';

describe('RentalListComponent', () => {
  let component: RentalListComponent;
  let fixture: ComponentFixture<RentalListComponent>;
  let rentalService: RentalService;
  
  const mockRentals: RentalsDTO[] = [
    {
      id: 1,
      user: { id: 1, name: 'John Doe' },
      book: { id: 1, title: 'Test Book 1' },
      rentalDate: '2022-01-01T00:00:00',
      returnDate: null
    },
    {
      id: 2,
      user: { id: 2, name: 'Jane Doe' },
      book: { id: 2, title: 'Test Book 2' },
      rentalDate: '2022-01-02T00:00:00',
      returnDate: '2022-01-03T00:00:00'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentalListComponent],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        RentalService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalListComponent);
    component = fixture.componentInstance;
    rentalService = TestBed.inject(RentalService);
    spyOn(rentalService, 'getAllRentals').and.returnValue(of(mockRentals));
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch all rentals on init', () => {
    expect(component.rentals).toEqual(mockRentals);
    expect(rentalService.getAllRentals).toHaveBeenCalled();
  });

  it('should display the correct number of rentals', () => {
    const compiled = fixture.nativeElement;
    const rentalItems = compiled.querySelectorAll('.rental-item');
    expect(rentalItems.length).toBe(mockRentals.length);
  });

  it('should display rental details correctly', () => {
    const compiled = fixture.nativeElement;
    const firstRental = compiled.querySelector('.rental-item:first-child');
    expect(firstRental.textContent).toContain('John Doe');
    expect(firstRental.textContent).toContain('Test Book 1');
  });
});
