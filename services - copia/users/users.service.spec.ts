import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { Observable, of } from 'rxjs';
import * as faker from 'ng-faker';

describe('UsersService', () => {
  let usersService: UsersService; // Add this

  beforeEach(() => {
    TestBed.configureTestingModule({

      providers: [UsersService]

    });

    usersService = TestBed.get(UsersService); // Add this
  });

  it('should be created', () => { // Remove inject()
    expect(usersService).toBeTruthy();
  });
  const oneHost = () => {
    return {
        id: faker.random.uuid(),
        name: faker.random.String(),
        role: faker.random.String(),
        pokemon: faker.random.String(),
    };
};
  describe('all', () => {
    it('should return a collection of users', () => {
      const userResponse = oneHost;
      let response;
      spyOn(usersService, 'all').and.returnValue(of(userResponse));

      usersService.all().subscribe(res => {
        response = res;
      });

      expect(response).toEqual(userResponse);
    });
  });
  describe('findOne', () => {
    it('should return a single user', () => {
      const userResponse = oneHost;
      let response;
      spyOn(usersService, 'findOne').and.returnValue(of(userResponse));
  
      usersService.findOne('2').subscribe(res => {
        response = res;
      });
  
      expect(response).toEqual(userResponse);
    });
  });
});