import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { UserComponent } from './components/user/user.component';
import { UserService } from './services/user.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
