import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserFormComponent } from './user-form.component';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UsersDTO } from '../../../models/users.dto';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let userService: UserService;
  let activatedRoute: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [FormsModule],
      providers: [
        UserService,
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  return key === 'id' ? '1' : null;
                }
              }
            }
          }
        },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user on init if id is provided', () => {
    const user: UsersDTO = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      profile: 'USER',
      active: true,
      createdDate: '',
      rentals: []
    };
    spyOn(userService, 'getUserById').and.returnValue(of(user));

    component.ngOnInit();

    expect(component.user).toEqual(user);
  });

  it('should save new user', () => {
    const user: UsersDTO = {
      id: 0,
      name: 'John Doe',
      email: 'john.doe@example.com',
      profile: 'USER',
      active: true,
      createdDate: '',
      rentals: []
    };
    spyOn(userService, 'createUser').and.returnValue(of(user));

    component.user = user;
    component.save();

    expect(userService.createUser).toHaveBeenCalledWith(user);
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });

  it('should update existing user', () => {
    const user: UsersDTO = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      profile: 'USER',
      active: true,
      createdDate: '',
      rentals: []
    };
    spyOn(userService, 'updateUser').and.returnValue(of(user));

    component.user = user;
    component.save();

    expect(userService.updateUser).toHaveBeenCalledWith(user.id, user);
    expect(router.navigate).toHaveBeenCalledWith(['/users']);
  });
});
