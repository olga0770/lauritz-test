import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState, ProductState} from '../../store';
import {IProduct} from '../../item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
              private route: ActivatedRoute, private temp: TempDataService) {
  }

  ngOnInit() {
    const reg = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';

    this.editProductForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        image: ['', [Validators.required, Validators.pattern(reg)]],
        description: ['', [Validators.required, Validators.minLength(10)]],
        location: ['', [Validators.required, Validators.minLength(3)]],
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
        startingPrice: ['', [Validators.required]],
        bids: []
      }
    );

    this.ngRedux.select(state => state.products).subscribe(res => {
      this.products = res.products;
      console.log('update product - select by id');
      const id = this.route.snapshot.paramMap.get('id');
      this.product = this.products.find(p => p._id === id);
    });
  }

  onSubmit() {
    const product = this.editProductForm.value as IProduct;
    const id = this.route.snapshot.paramMap.get('id');
    this.productsActions.updateProduct(id, product);
    console.log('update');
  }
}



/*
image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?' +
'Image=/Files/Images/XPI/a994fb59-e616-bc9e-a443-29c09bb402b3.jpg&Width=1200&Crompression=90',
*/
