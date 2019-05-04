import {Component, NgModule, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { IProduct } from '../../item';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {ProductsActions} from '../../redux/products.actions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  // @select() products;
  products: IProduct[];
  addProductForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private productsActions: ProductsActions) { }

  ngOnInit() {

    this.addProductForm = this.fb.group(
      {
        _id: [''],
        name: ['', [Validators.required, Validators.minLength(3)]],
        image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/' +
        'XPI/8f98f20a-64c4-cfaf-388d-582ae2532d47.jpg&Width=1200&Crompression=90',
        description: [''],
        location: ['', [Validators.required, Validators.minLength(3)]],
        endDate: new Date(),
        dateCreated: new Date(),
        user: {_id: '3', username: 'monkey',
          profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
          firstname: 'Dan', lastname: 'Christensen',
          email: 'christensen@gmail.com',
          phone: '23125678',
          birthDate: new Date(1971, 1, 2)},
        startingPrice: [''],
        bids: [
          {_id: '1', userId: '3', amount: '', date: new Date ()}
        ]
      }
    );

    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
    });



  }

  onSubmit() {
    const product = this.addProductForm.value as IProduct;
    this.productsActions.actionCreateProduct(product);
  }

  deleteProduct(product) {
    this.productsActions.actionDeleteProduct(product);
  }

}

