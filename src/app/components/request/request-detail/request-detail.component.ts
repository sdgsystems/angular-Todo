import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RequestService } from '../../../services/request.service';
import { Request } from '../../../models/Request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  constructor(private requestService: RequestService,
  private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}