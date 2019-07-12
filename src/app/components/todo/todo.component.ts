import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // this.todos = this.todoService.getTodos(); // can't use this as we're using Observable
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo) {
    // console.log('delete me');
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
