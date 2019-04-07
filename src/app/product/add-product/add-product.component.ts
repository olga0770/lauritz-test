import {Component, NgModule, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../../store';
import {ADD_ITEM, REMOVE_ITEM, SHOW_ITEM} from '../../actions';
import { IProduct } from '../../item';
// import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  @select() items;

  model: IProduct = {
    id: '0',
    name: '',
    image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/' +
      'XPI/8f98f20a-64c4-cfaf-388d-582ae2532d47.jpg&Width=1200&Crompression=90',
    description: '',
    location: '',
    endDate: new Date(),
    dateCreated: new Date(),
    user: {id: '1', username: 'monkey',
      profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
      firstname: 'Dan', lastname: 'Christensen'},
    startingPrice: 0,
    bids: []
  };

  // addItemForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {

    // this.addItemForm = this.fb.group(
    //   {
    //     name: ['', [Validators.required, Validators.minLength(3)]], // multiple validators
    //   }
    // );

  }

  onSubmit() {
    this.ngRedux.dispatch({type: ADD_ITEM, product: this.model});
  }

  removeItem(item) {
    this.ngRedux.dispatch({type: REMOVE_ITEM, id: item.id});
  }

  // showItem(item) {
  //   this.ngRedux.dispatch({type: SHOW_ITEM, id: item.id});
  // }
  //
  //

}
