import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IBid, IProduct, IUser} from '../../item';
import {TempDataService} from '../../services/temp-data.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../../store';
import {ProductsActions} from '../../redux/products.actions';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {BidsActions} from '../../redux/bids.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  products: IProduct[];
  product: IProduct;
  isLoading: boolean;
  bids: IBid[];
  bid: IBid;
  addBidForm: FormGroup;

  constructor(private route: ActivatedRoute, private temp: TempDataService,
              private fb: FormBuilder, private ngRedux: NgRedux<IAppState>,
              private productsActions: ProductsActions, private bidsActions: BidsActions) {
  }

  ngOnInit() {
    this.addBidForm = this.fb.group({
      // amount: ['', [Validators.required, Validators.min(this.bid.amount + 500)]],
      amount: ['', [Validators.required]],
      userId: ['4'],
      date: new Date()

    });

    this.productsActions.getProducts();
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
      this.isLoading = res.isLoading;
      console.log('product by id');
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.products.find(p => p._id === id);
    });

    this.ngRedux.select(state => state.bids).subscribe(res => {
      this.bids = res.bids;
    });

  }







  onSubmit() {
    // const id = this.route.snapshot.paramMap.get('id');
    const bid = this.addBidForm.value as IBid;
    this.bidsActions.addBid(bid);

    // this.temp.addBid(bid, id);
  }
}
