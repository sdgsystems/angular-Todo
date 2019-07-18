import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
