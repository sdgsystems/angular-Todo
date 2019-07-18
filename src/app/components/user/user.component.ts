import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  users: User[];
  selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  onSelect(user: User) {
    this.selectedUser = user;
  }

}