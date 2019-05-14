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

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  // @select() products;
  products: IProduct[];
  product: IProduct;
  isLoading: boolean;

  // product$: Observable<IProduct>;
  // products: IProduct[];

 /* tempBid: IBid;
  addBidForm: FormGroup;*/




    constructor(private route: ActivatedRoute, private temp: TempDataService,
                private fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private productsActions: ProductsActions) {
  }

  ngOnInit() {
/*    const id = this.route.snapshot.paramMap.get('id');
    this.t = this.temp.findProduct(id);*/

/*    this.addBidForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(this.t.bids[this.t.bids.length - 1].amount + 500)]]
    });*/


/*    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
      console.log('product by id');
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.products.find(p => p._id === id);
   });*/


    this.productsActions.getProducts();
    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
      this.isLoading = res.isLoading;
      console.log('product by id');
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.products.find(p => p._id === id);
    });


    // this.product.bids[0].amount = this.product.startingPrice;

  }


/*  this.productsActions.getProducts();
  this.ngRedux.select(state => state.products).subscribe(res => {
  this.products = res.products;
  this.isLoading = res.isLoading;
});*/





  onSubmit() {
/*    const id = this.route.snapshot.paramMap.get('id');
    const bid = this.addBidForm.value as IBid;
    this.temp.addBid(bid, id);*/
  }
}
