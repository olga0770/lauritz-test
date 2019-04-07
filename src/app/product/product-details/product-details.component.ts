import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IBid, IProduct} from '../../item';
import { TempDataService } from '../../services/temp-data.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  tempItemSingle: IProduct;
  tempBid: IBid;
  addBidForm: FormGroup;


  constructor( private route: ActivatedRoute, private temp: TempDataService, private fb: FormBuilder ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.tempItemSingle = this.temp.findProduct(id);

    this.addBidForm = this.fb.group({
      amount: [''],
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    const bid = this.addBidForm.value as IBid;
    this.temp.addBid(bid, id);
  }
}
