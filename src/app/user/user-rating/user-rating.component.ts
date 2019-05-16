import { Component, OnInit } from '@angular/core';
import {IUser} from '../../item';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store';
import {UsersActions} from '../../redux/users.actions';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit {
  users: IUser[];

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private usersActions: UsersActions) { }

  ngOnInit() {
    this.ngRedux.select(state => state.users).subscribe(res => {
      this.users = res.users;
    });

  }

}
