import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RequestComponent } from './components/request/request.component';
import { RequestDetailComponent } from './components/request/request-detail/request-detail.component';


const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'about', component: AboutComponent },
  { path: 'user/detail/:id', component: UserDetailComponent },
  { path: 'users', component: UserComponent},
  { path: 'request/detail/:id', component: RequestDetailComponent },
  { path: 'requests', component: RequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
