import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UserService } from '../../services/user.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor(
  private route: ActivatedRoute,
  private userService: UserService,
  private location: Location
) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => this.user = user);
  }

  save(): void {
   this.userService.updateUser(this.user)
     .subscribe(() => this.goBack());
 }

  goBack(): void {
    this.location.back();
  }

}