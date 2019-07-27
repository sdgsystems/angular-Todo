import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from '../models/Request';
import { ReqType } from '../models/ReqType';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})

export class RequestService {
  private requestsUrl = 'api/requests';  // URL to web api

  constructor(private http: HttpClient,
  private messageService: MessageService) { }

  /** Log a RequestService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RequestService: ${message}`);
  }

  getRequests(): Observable<Request[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('UserService: fetched users');
    //return of(USERS);
    return this.http.get<Request[]>(this.requestsUrl)
      .pipe(
        tap(_ => this.log('fetched requests')),
        catchError(this.handleError<Request[]>('getRequests', []))
      );
  }

  /** GET request by id. Will 404 if id not found */
  getRequest(id: number): Observable<Request> {
    const url = `${this.requestsUrl}/${id}`;
    return this.http.get<Request>(url).pipe(
      tap(_ => this.log(`fetched request id=${id}`)),
      catchError(this.handleError<Request>(`getRequest id=${id}`))
    );
  }

  getReqTypes(): Observable<ReqType[]> {
    // TODO: send the message _after_ fetching the heroes
    // this.messageService.add('UserService: fetched users');
    //return of(USERS);
    return this.http.get<ReqType[]>(this.requestsUrl)
      .pipe(
        tap(_ => this.log('fetched reqTypes')),
        catchError(this.handleError<ReqType[]>('getReqTypes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}