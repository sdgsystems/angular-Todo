import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { USERS } from '../mock-users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return USERS;
  }

}