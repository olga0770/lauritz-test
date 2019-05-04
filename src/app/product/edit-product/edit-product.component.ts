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
  // @select() products;
  products: IProduct[];
  t: IProduct;
  // product: IProduct = this.products[0];
  editProductForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private productsActions: ProductsActions,
              private route: ActivatedRoute, private temp: TempDataService) { }

  ngOnInit() {
    this.editProductForm = this.fb.group(
      {
        _id: [''],
        name: [''],
        image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/' +
          'XPI/8f98f20a-64c4-cfaf-388d-582ae2532d47.jpg&Width=1200&Crompression=90',
        description: [''],
        location: [''],
        endDate: new Date(),
        dateCreated: new Date(),
        user: {_id: '3', username: 'monkey',
          profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
          firstname: 'Dan', lastname: 'Christensen',
          email: 'christensen@gmail.com',
          phone: '23125678',
          birthDate: new Date(1971, 1, 2)},
        startingPrice: [''],
        bids: []
      });

    const id = this.route.snapshot.paramMap.get('id');
    this.t = this.temp.findProduct(id);
  }

  onSubmit() {
    const product = this.editProductForm.value as IProduct;
    this.productsActions.actionUpdateProduct(product);
    console.log('update');

    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
    });







  }

  deleteProduct(product) {
    this.productsActions.actionDeleteProduct(product);
  }

}
