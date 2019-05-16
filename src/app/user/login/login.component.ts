import { Component, OnInit } from '@angular/core';
import {IUser} from '../../item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgRedux} from '@angular-redux/store';
import {IAppState} from '../../store';
import {UsersActions} from '../../redux/users.actions';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: IUser[];
  loginForm: FormGroup;
  message: string;

  constructor(private ngRedux: NgRedux<IAppState>, private fb: FormBuilder, private usersActions: UsersActions,
              public router: Router, public authService: AuthService) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['', [Validators.required, Validators.minLength(3)]],
        password: ['', [Validators.required]],
      });

/*    this.ngRedux.select(state => state.users).subscribe(res => {
      this.users = res.users;
    });*/

  }

  onSubmit() {

    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/product/auction-overview';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }

    });


  }



}
