import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

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
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { RequestComponent } from './components/request/request.component';
import { RequestService } from './services/request.service';
import { RequestDetailComponent } from './components/request/request-detail/request-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutComponent,
    UserComponent,
    UserDetailComponent,
    MessagesComponent,
    RequestComponent,
    RequestDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
  // and returns simulated server responses.
  // Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }) ],
  providers: [UserService, MessageService, InMemoryDataService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
