import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductComponent} from './product/product.component';
import {AddProductComponent} from './product/add-product/add-product.component';
import {ProductOverviewComponent} from './product/product-overview/product-overview.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {HomeComponent} from './home/home.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {RegisterComponent} from './user/register/register.component';
import {LoginComponent} from './user/login/login.component';
import {UserRatingComponent} from './user/user-rating/user-rating.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent, canActivate: [AuthGuard],
    children: [
      {path: '', children: [
          {path: 'auction-create', component: AddProductComponent},
          {path: 'auction-overview', component: ProductOverviewComponent},
          {path: 'edit-auction/:id', component: EditProductComponent},
          {path: 'product-details/:id', component: ProductDetailsComponent},
          {path: 'rate-seller', component: UserRatingComponent},
        ]
      }
    ]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
