import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RentalFormComponent } from './rental-form.component';
import { RentalService } from '../../../services/rental.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { RentalsDTO } from '../../../models/rentals.dto';

describe('RentalFormComponent', () => {
  let component: RentalFormComponent;
  let fixture: ComponentFixture<RentalFormComponent>;
  let rentalService: RentalService;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [RentalFormComponent],
      imports: [FormsModule],
      providers: [
        RentalService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => key === 'id' ? '1' : null
              }
            }
          }
        },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RentalFormComponent);
    component = fixture.componentInstance;
    rentalService = TestBed.inject(RentalService);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch rental on init if id is provided', () => {
    const rental: RentalsDTO = {
      id: 1,
      user: { id: 1, name: 'John Doe' },
      book: { id: 1, title: 'Test Book' },
      rentalDate: '2022-01-01T00:00:00',
      returnDate: null
    };
    spyOn(rentalService, 'getRentalById').and.returnValue(of(rental));

    component.ngOnInit();

    expect(component.rental).toEqual(rental);
  });

  it('should save new rental', () => {
    const rental: RentalsDTO = {
      id: 0,
      user: { id: 1, name: 'John Doe' },
      book: { id: 1, title: 'Test Book' },
      rentalDate: '2022-01-01T00:00:00',
      returnDate: null
    };
    spyOn(rentalService, 'rentBook').and.returnValue(of(rental));

    component.rental = rental;
    component.save();

    expect(rentalService.rentBook).toHaveBeenCalledWith(rental.user.id, rental.book.id);
    expect(router.navigate).toHaveBeenCalledWith(['/rentals']);
  });

  it('should update existing rental', () => {
    const rental: RentalsDTO = {
      id: 1,
      user: { id: 1, name: 'John Doe' },
      book: { id: 1, title: 'Test Book' },
      rentalDate: '2022-01-01T00:00:00',
      returnDate: '2022-01-02T00:00:00'
    };
    spyOn(rentalService, 'returnBook').and.returnValue(of(rental));

    component.rental = rental;
    component.save();

    expect(rentalService.returnBook).toHaveBeenCalledWith(rental.id);
    expect(router.navigate).toHaveBeenCalledWith(['/rentals']);
  });
});
