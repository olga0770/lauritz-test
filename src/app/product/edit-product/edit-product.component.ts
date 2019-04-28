import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import { Actions } from '../../actions';
import { IProduct } from '../../item';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  @select() products;
  editProductForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private actions: Actions, private route: ActivatedRoute) { }

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
        user: {id: '3', username: 'monkey',
          profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
          firstname: 'Dan', lastname: 'Christensen'},
        startingPrice: [''],
        bids: []
      }
    );
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    const editProduct = this.editProductForm.value as IProduct;
    this.actions.actionEditProduct(editProduct, id);
    console.log('edit');
  }

  deleteProduct(product) {
    this.actions.actionDeleteProduct(product);
  }

}
