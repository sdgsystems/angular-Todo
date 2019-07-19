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
    // used before async rxjs: this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  add(name: string, emailAddress: string): void {
    name = name.trim();
    emailAddress = emailAddress.trim();
    if (!name) { return; }
    this.userService.addUser({ name, emailAddress } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  // onSelect(user: User) {
  //   this.selectedUser = user;
  // }

}