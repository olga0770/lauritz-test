import { AppRoutingModule } from './app-routing-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';

import {DevToolsExtension, NgRedux, NgReduxModule} from '@angular-redux/store';
import { IAppState, rootReducer } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductOverviewComponent } from './product/product-overview/product-overview.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { UserRatingComponent } from './user/user-rating/user-rating.component';
import { ProductInfoComponent } from './product/product-info/product-info.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductOverviewComponent,
    AddProductComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    HomeComponent,
    EditProductComponent,
    RegisterComponent,
    LoginComponent,
    UserRatingComponent,
    ProductInfoComponent

  ],
  imports: [
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter) {
    this.ngRedux.configureStore(rootReducer, {}, [], [ devTool.isEnabled() ? devTool.enhancer() : f => f]);

    ngReduxRouter.initialize();
  }
}
