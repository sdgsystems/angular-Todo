import { Component, OnInit } from '@angular/core';
import { Request } from '../../models/Request';
import { RequestService} from '../../services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  requests: Request[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests(): void {
    // used before async rxjs: this.users = this.userService.getUsers();
    this.requestService.getRequests().subscribe(requests => this.requests = requests);
  }

}