import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import {IAppState, ProductState} from '../../store';
import { IProduct } from '../../item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {ProductsActions} from '../../redux/products.actions';
import {TempDataService} from '../../services/temp-data.service';
import {productsReducer} from '../../redux/products.reducer';
import * as types from '../../redux/products.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  products: IProduct[];
  product: IProduct;
  editProductForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private productsActions: ProductsActions,
              private route: ActivatedRoute, private temp: TempDataService) { }

  ngOnInit() {
    this.editProductForm = this.fb.group(
      {
        // _id: [''],
        name: ['Leather Swan Chair - Inspired By Designs of Arne Jacobsen', [Validators.required, Validators.minLength(3)]],
        image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/' +
          'XPI/8f98f20a-64c4-cfaf-388d-582ae2532d47.jpg&Width=1200&Crompression=90',
        description: ['Jacobsen’s beautifully sculpted Swan Chair could just be the most recognisable chair of our times. ' +
        'So if you’re thinking of buying one, you need to know you’re getting ' +
        'a lot more than a style icon…', [Validators.required, Validators.minLength(10)]],
        location: ['Copenhagen', [Validators.required, Validators.minLength(3)]],
        endDate: new Date(),
        dateCreated: new Date(),
        user: {
          _id: '3', username: 'monkey',
          profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
          firstname: 'Dan', lastname: 'Christensen',
          email: 'christensen@gmail.com',
          password: '123456',
          phone: '23125678',
          birthDate: new Date(1971, 1, 2),
          isAdmin: false
        },
        startingPrice: ['34500', [Validators.required]],
        bids: [
          {_id: '1', userId: '3', amount: '34500', date: new Date ()}
        ]
      }
      );

/*    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
    });*/

    // const id = this.route.snapshot.paramMap.get('id');
    // this.productsActions.actionGetProduct(id);
    // this.t = this.temp.findProduct(id);

    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
      console.log('update product - select by id');
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.products.find(p => p._id === id);
    });
  }

  onSubmit() {
    this.product = this.editProductForm.value as IProduct;
    this.productsActions.updateProduct(this.product);
    console.log('update');




    /*
        this.ngRedux.select(state => state.products).subscribe(res => {
          this.products = res.products;
        });
    */







  }



}
