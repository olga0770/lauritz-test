import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IBid, IProduct } from '../../item';
import { TempDataService } from '../../services/temp-data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import {Actions} from '../../actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @select() products;
  t: IProduct;
  tempBid: IBid;
  addBidForm: FormGroup;

  constructor( private route: ActivatedRoute, private temp: TempDataService,
               private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private actions: Actions ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.t = this.temp.findProduct(id);

    this.addBidForm = this.fb.group({
      amount: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    const bid = this.addBidForm.value as IBid;
    this.temp.addBid(bid, id);
  }
}
