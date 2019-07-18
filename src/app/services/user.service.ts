import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
//import { USERS } from '../mock-users';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersUrl = 'api/users';  // URL to web api

  constructor(
  private http: HttpClient,
  private messageService: MessageService) { }

  // getUsers(): User[] {
  //   return USERS;
  // }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getUsers(): Observable<User[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('UserService: fetched users');
    //return of(USERS);
    return this.http.get<User[]>(this.usersUrl);
  }

  // getUser(id: number): Observable<User> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`UserService: fetched user id=${id}`);
  //   return of(USERS.find(user => user.id === id));
  // }

}