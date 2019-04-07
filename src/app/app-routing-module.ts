import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ProductOverviewComponent } from './product/product-overview/product-overview.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import { HomeComponent } from './home/home.component';


// Defining your routes
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auction', component: ProductComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
