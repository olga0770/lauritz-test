import {Component, NgModule, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import {Actions} from '../../actions';
import { IProduct } from '../../item';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  @select() products;
  addProductForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private actions: Actions) { }

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
        user: {id: '3', username: 'monkey',
          profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
          firstname: 'Dan', lastname: 'Christensen'},
        startingPrice: [''],
        bids: []
      }
    );
  }

  onSubmit() {
    const product = this.addProductForm.value as IProduct;
    this.actions.actionCreateProduct(product);
  }

  deleteProduct(product) {
    this.actions.actionDeleteProduct(product);
  }

}

