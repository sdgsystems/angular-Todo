import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';
import { USERS } from '../mock-users';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private messageService: MessageService) { }

  // getUsers(): User[] {
  //   return USERS;
  // }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UserService: fetched users');
    return of(USERS);
  }

}