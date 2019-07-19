import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
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

    let todos = [
      { id: 11, title: 'Test Item 1', completed: false },
      { id: 12, title: 'Test Item 2', completed: false },
      { id: 13, title: 'Test Item 3', completed: false },
      { id: 14, title: 'Test Item 4', completed: false },
      { id: 15, title: 'Test Item 5', completed: false }
    ];
    return {users, todos};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(users: User[]): number {
  //   return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  // }
  // found the following here: https://stackoverflow.com/questions/40146811/multiple-collections-in-angular-in-memory-web-api
  genId<T extends User | Todo>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }

}