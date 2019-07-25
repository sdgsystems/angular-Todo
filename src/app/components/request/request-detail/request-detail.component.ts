import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { RequestService } from '../../../services/request.service';
import { Request } from '../../../models/Request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
   @Input() request: Request;
   form: FormGroup;
   requestTypes: string[] = ['Type 1', 'Type 2', 'Type 3'];
   reqTypes = [];

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private location: Location,
    private formBuilder: FormBuilder
    ) { 
        this.form = this.formBuilder.group({
          reqTypes: ['']
        });

        // async orders
        of(this.getReqTypes()).subscribe(reqTypes => {
          this.reqTypes = reqTypes;
          this.form.controls.reqTypes.patchValue(this.reqTypes[0].id);
        });

        // synchronous orders
        // this.orders = this.getOrders();
        // this.form.controls.orders.patchValue(this.orders[0].id);

     }

  ngOnInit() {
    this.getRequest();
  }

  getRequest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(id).subscribe(request => this.request = request);
  }

  getReqTypes() {
    return [
      { id: '1', name: 'active' },
      { id: '2', name: 'answered' },
      { id: '3', name: 'for testing 1' },
      { id: '4', name: 'for testing 2' }
    ];
  }

  goBack(): void {
    this.location.back();
  }

  submit() {
    console.log(this.form.controls.reqTypes.value);
  }

}