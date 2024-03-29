import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

import { RequestService } from '../../../services/request.service';
import { Request } from '../../../models/Request';
import { ReqType } from '../../../models/ReqType';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {
   @Input() request: Request;
   form: FormGroup;
   countryForm: FormGroup;
   countries = ['USA', 'Canada', 'Uk']
   reqTypes = [];
   selectedValue: string = '';

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService,
    private location: Location,
    private formBuilder: FormBuilder
    ) { 
        /*this.form = this.formBuilder.group({
          reqTypes: ['']
        });

        // async loading
        of(this.getReqTypes()).subscribe(reqTypes => {
          this.reqTypes = reqTypes;
          this.form.controls.reqTypes.patchValue(this.reqTypes[0].id);
        });*/

        // synchronous loading
        // this.orders = this.getOrders();
        // this.form.controls.orders.patchValue(this.orders[0].id);

     }

  ngOnInit() {

    this.form = this.formBuilder.group({
          reqTypes: ['']
    });

    // synchronous loading
    //this.reqTypes = this.getReqTypes();
    //this.getReqTypes();
    //this.form.controls.reqTypes.patchValue(this.reqTypes[0].id);

    // async loading
    //of(this.getReqTypes()).subscribe(reqTypes => {
    //   this.reqTypes = reqTypes;
    //  this.reqTypes = this.getReqTypes();
    //  this.form.controls.reqTypes.patchValue(this.reqTypes[0].id);
    //});

    this.getRequest();

    /*this.countryForm = this.formBuilder.group({
      countryControl: ['Uk']
    });*/
  }

  getRequest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(id).subscribe(request => this.request = request);
  }

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedValue = event.target.value;
    console.log(this.selectedValue);
  }

  getReqTypes() {
    /*return [
      { id: '1', name: 'active' },
      { id: '2', name: 'answered' },
      { id: '3', name: 'for testing 1' },
      { id: '4', name: 'for testing 2' }
    ];*/
    this.requestService.getReqTypes().subscribe(reqTypes => this.reqTypes = reqTypes);
  }

  goBack(): void {
    this.location.back();
  }

  /*submit() {
    console.log(this.form.controls.reqTypes.value);
  }*/

  // found here https://coryrylan.com/blog/creating-a-dynamic-select-with-angular-forms
  // also https://blog.kevinchisholm.com/angular/get-value-selected-dropdown-menu-item/
  // also https://medium.com/p/85c99958cca5/responses/show which appears interesting

  // maybe just go with this: https://valor-software.com/ng2-select/

  // https://medium.com/@kastepanyan24/how-to-set-selected-option-dynamically-in-angular-6-85c99958cca5

}