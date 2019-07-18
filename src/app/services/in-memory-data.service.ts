import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const users = [
      { id: 11, name: 'Dr Nice', emailAddress: 'user1@test.com' },
      { id: 12, name: 'Narco', emailAddress: 'user2@test.com' },
      { id: 13, name: 'Bombasto', emailAddress: 'user3@test.com' },
      { id: 14, name: 'Celeritas', emailAddress: 'user4@test.com' },
      { id: 15, name: 'Magneta', emailAddress: 'user5@test.com' },
      { id: 16, name: 'RubberMan', emailAddress: 'user6@test.com' },
      { id: 17, name: 'Dynama', emailAddress: 'user7@test.com' },
      { id: 18, name: 'Dr IQ', emailAddress: 'user8@test.com' },
      { id: 19, name: 'Magma', emailAddress: 'user9@test.com' },
      { id: 20, name: 'Tornado', emailAddress: 'user10@test.com' }
    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

}