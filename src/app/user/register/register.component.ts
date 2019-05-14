import { Component, OnInit } from '@angular/core';
import {IProduct, IUser} from '../../item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store';
import {UsersActions} from '../../redux/users.actions';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: IUser[];
  registerForm: FormGroup;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private usersActions: UsersActions,
              private route: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        _id: [''],
        username: ['', [Validators.required, Validators.minLength(3)]],
        profileImage: 'https://archive.icann.org/en/biog/photos/akcin-big.jpg',
        firstname: ['', [Validators.required, Validators.minLength(3)]],
        lastname: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        phone: ['', [Validators.required, Validators.minLength(8)]],
        birthDate: new Date(),
        isAdmin: false
      });

    this.ngRedux.select(state => state.users).subscribe(res => {
      this.users = res.users;
    });
  }

  onSubmit() {
    const user = this.registerForm.value as IUser;
    this.usersActions.actionAddUser(user);

    this.route.navigate(['/login']);
  }

}
