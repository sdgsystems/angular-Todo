import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions =  {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  private todosUrl = 'api/todos';  // URL to web api

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a TodoService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TodoService: ${message}`);
  }

  // Get Todo
  getTodos(): Observable<Todo[]> {
    // return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('TodoService: fetched todos');
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(
        tap(_ => this.log('fetched todos')),
        catchError(this.handleError<Todo[]>('getTodos', []))
      );
  }

  // Delete Todo
  deleteTodo(todo: Todo | number): Observable<Todo> {
    // Remove from UI
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    // Remove from server
    return this.http.delete<Todo>(url, httpOptions)
      .pipe(
      tap(_ => this.log(`deleted todo w/ id=${id}`)),
      catchError(this.handleError<Todo>('deleteTodo'))
    );
  }

  // Add Todo
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions)
      .pipe(
      tap((newTodo: Todo) => this.log(`added todo w/ id=${newTodo.id}`)),
      catchError(this.handleError<Todo>('addTodo'))
    );
  }

  // Toggle Completed
  toggleCompleted(todo: Todo | number): Observable<any> {
    const id = typeof todo === 'number' ? todo : todo.id;
    const url = `${this.todosUrl}/${id}`;
    return this.http.put(url, todo, httpOptions)
      .pipe(
      tap(_ => this.log(`toggled todo w/ id=${id}`)),
      catchError(this.handleError<Todo>('toggleCompleted'))
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
