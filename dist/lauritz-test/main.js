(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/add-product/add-product.component */ "./src/app/product/add-product/add-product.component.ts");
/* harmony import */ var _product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product-overview/product-overview.component */ "./src/app/product/product-overview/product-overview.component.ts");
/* harmony import */ var _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product-details/product-details.component */ "./src/app/product/product-details/product-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/user-rating/user-rating.component */ "./src/app/user/user-rating/user-rating.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");














var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        children: [
            { path: '', children: [
                    { path: 'auction-create', component: _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"] },
                    { path: 'auction-overview', component: _product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_6__["ProductOverviewComponent"] },
                    { path: 'edit-auction/:id', component: _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_9__["EditProductComponent"] },
                    { path: 'product-details/:id', component: _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"] },
                    { path: 'rate-seller', component: _user_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_12__["UserRatingComponent"] },
                ]
            }
        ] },
    { path: 'register', component: _user_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"] },
    { path: 'login', component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox.\r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"logo\" routerLink=\"./\" routerLinkActive=\"active\">Lauritz <mat-icon>gavel</mat-icon></span>\n  <button mat-button routerLink=\"./\" routerLinkActive=\"active\">Home</button>\n\n  <button mat-button routerLink=\"./product/auction-overview\" routerLinkActive=\"active\">Auction</button>\n\n\n<!--  <button mat-button routerLink=\"./product/auction-create\" routerLinkActive=\"active\">Add Auction</button>\n  <button mat-button routerLink=\"./product/auction-overview\" routerLinkActive=\"active\">Auction Overview</button>-->\n\n  <button mat-button routerLink=\"./product/rate-seller\" routerLinkActive=\"active\">Sellers</button>\n\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <button mat-button routerLink=\"/login\" routerLinkActive=\"active\" id=\"btnLogin\">Login</button>\n\n  <button mat-button routerLink=\"/register\" routerLinkActive=\"active\">Register</button>\n\n</mat-toolbar>\n\n\n<router-outlet></router-outlet>\n\n\n\n\n\n<!--<footer><mat-divider></mat-divider><p class=\"small\" style=\"padding: 10px;\">Copyright Lauritz.com I 2019</p></footer>-->\n\n<!--<app-product></app-product>-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Lauritz Auction';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store */ "./src/app/store.ts");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product/product-overview/product-overview.component */ "./src/app/product/product-overview/product-overview.component.ts");
/* harmony import */ var _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/add-product/add-product.component */ "./src/app/product/add-product/add-product.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product/product-details/product-details.component */ "./src/app/product/product-details/product-details.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./product/edit-product/edit-product.component */ "./src/app/product/edit-product/edit-product.component.ts");
/* harmony import */ var _user_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/register/register.component */ "./src/app/user/register/register.component.ts");
/* harmony import */ var _user_login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/login/login.component */ "./src/app/user/login/login.component.ts");
/* harmony import */ var _user_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user-rating/user-rating.component */ "./src/app/user/user-rating/user-rating.component.ts");
/* harmony import */ var _product_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product/product-info/product-info.component */ "./src/app/product/product-info/product-info.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_product_search_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/product-search.pipe */ "./src/app/services/product-search.pipe.ts");
/* harmony import */ var _user_rating_rating_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./user/rating/rating.component */ "./src/app/user/rating/rating.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule(ngRedux, devTool, ngReduxRouter) {
        this.ngRedux = ngRedux;
        this.devTool = devTool;
        this.ngReduxRouter = ngReduxRouter;
        this.ngRedux.configureStore(_store__WEBPACK_IMPORTED_MODULE_6__["rootReducer"], {}, [], [devTool.isEnabled() ? devTool.enhancer() : function (f) { return f; }]);
        ngReduxRouter.initialize();
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _product_product_overview_product_overview_component__WEBPACK_IMPORTED_MODULE_12__["ProductOverviewComponent"],
                _product_add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"],
                _product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _product_edit_product_edit_product_component__WEBPACK_IMPORTED_MODULE_17__["EditProductComponent"],
                _user_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _user_login_login_component__WEBPACK_IMPORTED_MODULE_19__["LoginComponent"],
                _user_user_rating_user_rating_component__WEBPACK_IMPORTED_MODULE_20__["UserRatingComponent"],
                _product_product_info_product_info_component__WEBPACK_IMPORTED_MODULE_21__["ProductInfoComponent"],
                _services_product_search_pipe__WEBPACK_IMPORTED_MODULE_23__["ProductSearchPipe"],
                _user_rating_rating_component__WEBPACK_IMPORTED_MODULE_24__["RatingComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgReduxModule"],
                _angular_redux_router__WEBPACK_IMPORTED_MODULE_7__["NgReduxRouterModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["DevToolsExtension"],
            _angular_redux_router__WEBPACK_IMPORTED_MODULE_7__["NgReduxRouter"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService() {
        this.isLoggedIn = false;
    }
    AuthService.prototype.login = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (val) { return _this.isLoggedIn = true; }));
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <mat-card class=\"example-card\">\n        <mat-form-field>\n          <input matInput placeholder=\"Search...\" [(ngModel)]=\"productSearch\">\n        </mat-form-field>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"(products)?.length!=0\">\n    <div class=\"col-sm-12 col-md-6\" *ngFor=\"let t of products.slice().reverse() | productSearch: productSearch\">\n      <mat-card class=\"example-card\">\n\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"\n               matTooltip=\"{{t.user.firstname}} {{t.user.lastname}}\"\n               matTooltipPosition=\"above\">\n            <img mat-card-avatar *ngIf=\"t.user.profileImage\" [src]=\"t.user.profileImage\" alt=\"profile image\">\n          </div>\n          <mat-card-title>{{t.name }}</mat-card-title>\n          <mat-card-subtitle>{{t.location}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-divider></mat-divider>\n        <br>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <img mat-card-image *ngIf=\"t.image\" [src]=\"t.image\"\n                   alt=\"image\" style=\"margin-top: 5px;\">\n            </div>\n\n            <div class=\"col-6\">\n              <p>\n                <small>Starting Price:</small>\n              </p>\n              <h4 style=\"margin-top: -15px;\">{{t.startingPrice | currency:'DKK'}}</h4>\n\n              <p><b>Start:</b> {{t.dateCreated | date}}</p>\n              <p style=\"margin-top: -15px;\"><b>End:</b> {{t.endDate | date}}</p>\n\n              <button mat-button color=\"accent\" routerLink=\"/product/product-details/{{t._id}}\"\n                      style=\"margin-left: -15px;\">More Info...\n              </button>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/temp-data.service */ "./src/app/services/temp-data.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_products_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/products.actions */ "./src/app/redux/products.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(route, temp, ngRedux, productsActions) {
        this.route = route;
        this.temp = temp;
        this.ngRedux = ngRedux;
        this.productsActions = productsActions;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngRedux.select(function (state) { return state.products; }).subscribe(function (res) {
            _this.products = res.products;
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_temp_data_service__WEBPACK_IMPORTED_MODULE_2__["TempDataService"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"],
            _redux_products_actions__WEBPACK_IMPORTED_MODULE_4__["ProductsActions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");








var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/product/add-product/add-product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvYWRkLXByb2R1Y3QvYWRkLXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product/add-product/add-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center align-items-center h-100\">\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n      <mat-card class=\"example-card\">\n        <mat-card-title>Add Auction</mat-card-title>\n        <mat-divider></mat-divider>\n        <br>\n\n        <form class=\"example-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"addProductForm\">\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Auction Title\" formControlName=\"name\" required>\n            <mat-error\n              *ngIf=\"addProductForm.controls.name.errors?.required && addProductForm.controls.name.touched && addProductForm.controls.name.dirt\">\n              The Auction field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"addProductForm.controls.name.errors?.minlength\">\n              The Auction field must be at least 3 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Location\" formControlName=\"location\" required>\n            <mat-error\n              *ngIf=\"addProductForm.controls.location.errors?.required && addProductForm.controls.location.touched && addProductForm.controls.location.dirty\">\n              The Location field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"addProductForm.controls.location.errors?.minlength\">\n              The Location field must be at least 3 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Image URL\" formControlName=\"image\" required type=\"url\">\n            <mat-error\n              *ngIf=\"addProductForm.controls.image.errors?.required && addProductForm.controls.image.touched && addProductForm.controls.image.dirty\">\n              The Image URL field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"addProductForm.controls.image.errors?.pattern\">\n              Invalid URL!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput matTextareaAutosize placeholder=\"Description\" formControlName=\"description\" required></textarea>\n            <mat-error\n              *ngIf=\"addProductForm.controls.description.errors?.required && addProductForm.controls.description.touched && addProductForm.controls.description.dirty\">\n              The Description field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"addProductForm.controls.description.errors?.minlength\">\n              The Description field must be at least 10 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Starting Price\" formControlName=\"startingPrice\" required type=\"number\">\n            <mat-error\n              *ngIf=\"addProductForm.controls.startingPrice.errors?.required && addProductForm.controls.startingPrice.touched && addProductForm.controls.startingPrice.dirty\">\n              The Starting Price field must be a number!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <div>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Auction ends\" formControlName=\"endDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker touchUi=\"true\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <br>\n\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!addProductForm.valid\" id=\"btnCreateNewAuction\">Add Auction\n          </button>\n\n        </form>\n\n      </mat-card>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product/add-product/add-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.ts ***!
  \**************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _redux_products_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/products.actions */ "./src/app/redux/products.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_products_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/products-api.service */ "./src/app/services/products-api.service.ts");







var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(ngRedux, fb, productsActions, route, api) {
        this.ngRedux = ngRedux;
        this.fb = fb;
        this.productsActions = productsActions;
        this.route = route;
        this.api = api;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var reg = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
        this.addProductForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(reg)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
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
            startingPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bids: [
                { _id: '1', userId: '3', amount: '49500', date: new Date() }
            ]
        });
    };
    AddProductComponent.prototype.onSubmit = function () {
        var product = this.addProductForm.value;
        this.productsActions.createNewProduct(product);
    };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/product/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/product/add-product/add-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _redux_products_actions__WEBPACK_IMPORTED_MODULE_4__["ProductsActions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_products_api_service__WEBPACK_IMPORTED_MODULE_6__["ProductsApiService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvZWRpdC1wcm9kdWN0L2VkaXQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 col-md-6\">\n\n      <mat-card class=\"example-card\">\n        <mat-card-title>Update Auction</mat-card-title>\n        <mat-divider></mat-divider>\n        <br>\n\n        <form class=\"example-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"editProductForm\">\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Auction Title\" formControlName=\"name\" required [(ngModel)]=\"product.name\">\n            <mat-error\n              *ngIf=\"editProductForm.controls.name.errors?.required && editProductForm.controls.name.touched && editProductForm.controls.name.dirty\">\n              The Auction field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"editProductForm.controls.name.errors?.minlength\">\n              The Auction Title must be at least 3 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Location\" formControlName=\"location\" required [(ngModel)]=\"product.location\">\n            <mat-error\n              *ngIf=\"editProductForm.controls.location.errors?.required && editProductForm.controls.location.touched && editProductForm.controls.location.dirty\">\n              The Location field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"editProductForm.controls.location.errors?.minlength\">\n              The Location field must be at least 3 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Image URL\" formControlName=\"image\" required type=\"url\" [(ngModel)]=\"product.image\">\n            <mat-error\n              *ngIf=\"editProductForm.controls.image.errors?.required && editProductForm.controls.image.touched && editProductForm.controls.image.dirty\">\n              The Image URL field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"editProductForm.controls.image.errors?.pattern\">\n              Invalid URL!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <textarea matInput matTextareaAutosize placeholder=\"Description\" formControlName=\"description\"\n                      required [(ngModel)]=\"product.description\"></textarea>\n            <mat-error\n              *ngIf=\"editProductForm.controls.description.errors?.required && editProductForm.controls.description.touched && editProductForm.controls.description.dirty\">\n              The Description field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"editProductForm.controls.description.errors?.minlength\">\n              The Description field must be at least 10 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Starting Price\" formControlName=\"startingPrice\" required type=\"number\" [(ngModel)]=\"product.startingPrice\">\n            <mat-error\n              *ngIf=\"editProductForm.controls.startingPrice.errors?.required && editProductForm.controls.startingPrice.touched && editProductForm.controls.startingPrice.dirty\">\n              The Starting Price field must be a number!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <div>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Auction ends\" formControlName=\"endDate\" [(ngModel)]=\"product.endDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker touchUi=\"true\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n          <br>\n\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!editProductForm.valid\">Update Auction\n          </button>\n\n        </form>\n      </mat-card>\n\n    </div>\n\n\n    <div class=\"col-sm-12 col-md-6\">\n      <mat-card class=\"example-card\">\n\n        <mat-card-header>\n          <mat-card-title>{{product.name }}</mat-card-title>\n          <mat-card-subtitle>{{product.location}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-divider></mat-divider>\n        <br>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <img mat-card-image [src]=\"product.image\"\n                   alt=\"image\" style=\"margin-top: 5px;\">\n            </div>\n\n            <div class=\"col-6\">\n              <p>{{product.description}}</p>\n              <p><small>Starting Price:</small></p>\n              <h4 style=\"margin-top: -15px;\">{{product.startingPrice | currency:'DKK'}}</h4>\n\n              <p><b>Start:</b> {{product.dateCreated | date}}</p>\n              <p style=\"margin-top: -15px;\"><b>End:</b> {{product.endDate | date}}</p>\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/product/edit-product/edit-product.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/edit-product/edit-product.component.ts ***!
  \****************************************************************/
/*! exports provided: EditProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductComponent", function() { return EditProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _redux_products_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/products.actions */ "./src/app/redux/products.actions.ts");
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/temp-data.service */ "./src/app/services/temp-data.service.ts");







var EditProductComponent = /** @class */ (function () {
    function EditProductComponent(ngRedux, fb, productsActions, route, temp) {
        this.ngRedux = ngRedux;
        this.fb = fb;
        this.productsActions = productsActions;
        this.route = route;
        this.temp = temp;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reg = '^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+$';
        this.editProductForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(reg)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10)]],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
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
            startingPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            bids: []
        });
        this.ngRedux.select(function (state) { return state.products; }).subscribe(function (res) {
            _this.products = res.products;
            console.log('update product - select by id');
            var id = _this.route.snapshot.paramMap.get('id');
            _this.product = _this.products.find(function (p) { return p._id === id; });
        });
    };
    EditProductComponent.prototype.onSubmit = function () {
        var product = this.editProductForm.value;
        var id = this.route.snapshot.paramMap.get('id');
        this.productsActions.updateProduct(id, product);
        console.log('update');
    };
    EditProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-product',
            template: __webpack_require__(/*! ./edit-product.component.html */ "./src/app/product/edit-product/edit-product.component.html"),
            styles: [__webpack_require__(/*! ./edit-product.component.css */ "./src/app/product/edit-product/edit-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _redux_products_actions__WEBPACK_IMPORTED_MODULE_5__["ProductsActions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_temp_data_service__WEBPACK_IMPORTED_MODULE_6__["TempDataService"]])
    ], EditProductComponent);
    return EditProductComponent;
}());

/*
image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?' +
'Image=/Files/Images/XPI/a994fb59-e616-bc9e-a443-29c09bb402b3.jpg&Width=1200&Crompression=90',
*/


/***/ }),

/***/ "./src/app/product/product-details/product-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"\n               matTooltip=\"{{product.user.firstname}} {{product.user.lastname}}\"\n               matTooltipPosition=\"above\">\n            <img mat-card-avatar [src]=\"product.user.profileImage\" alt=\"profile image\">\n          </div>\n          <mat-card-title>{{product.name}}</mat-card-title>\n          <mat-card-subtitle>{{product.location}}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-divider></mat-divider><br>\n\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-3\">\n              <img mat-card-image [src]=\"product.image\"\n                   alt=\"image\" style=\"margin-top: 5px;\">\n            </div>\n\n            <div class=\"col-9\">\n              <p>{{product.description}}</p>\n              <p><small>Starting Price:</small></p>\n              <h4 style=\"margin-top: -15px;\">{{product.startingPrice | currency:'DKK'}}</h4>\n\n<!--              <div>\n                <p><small>Last Bid:</small></p>\n                <h4 style=\"margin-top: -15px;\">{{product.bids[product.bids.length - 1].amount | currency:'DKK'}}</h4>\n              </div>-->\n\n              <div class=\"lastBid\" *ngFor=\"let bid of bids; let first = first; let last = last\" [ngClass]=\"{ first: first, last: last }\">\n                <div *ngIf=\"last\">\n                  <p><small>Last Bid:</small></p>\n                  <h4 style=\"margin-top: -15px;\">{{bid.amount | currency:'DKK'}}</h4>\n                </div>\n              </div>\n\n              <p><b>Start:</b> {{product.dateCreated | date}}</p>\n              <p style=\"margin-top: -15px;\"><b>End:</b> {{product.endDate | date}}</p>\n\n              <form class=\"example-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"addBidForm\">\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput type=\"number\"\n                         placeholder=\"Add your bid\"\n                         formControlName=\"amount\" required>\n                  <mat-error *ngIf=\"addBidForm.controls.amount.errors?.required && addBidForm.controls.amount.touched &&\n                                    addBidForm.controls.amount.dirty\">\n                    The Bid field is required!</mat-error>\n                  <mat-error *ngIf=\"addBidForm.controls.amount.errors?.min\">\n                  Your Bid must be greater than tne Last Bid!</mat-error>\n                </mat-form-field>\n\n                <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!addBidForm.valid\">Add Bid</button>\n              </form>\n\n            </div>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/product/product-details/product-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-details/product-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/temp-data.service */ "./src/app/services/temp-data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_products_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/products.actions */ "./src/app/redux/products.actions.ts");
/* harmony import */ var _redux_bids_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/bids.actions */ "./src/app/redux/bids.actions.ts");








var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(route, temp, fb, ngRedux, productsActions, bidsActions) {
        this.route = route;
        this.temp = temp;
        this.fb = fb;
        this.ngRedux = ngRedux;
        this.productsActions = productsActions;
        this.bidsActions = bidsActions;
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsActions.getProducts();
        this.ngRedux.select(function (state) { return state.products; }).subscribe(function (res) {
            _this.products = res.products;
            _this.isLoading = res.isLoading;
            console.log('product by id');
            var id = _this.route.snapshot.paramMap.get('id');
            _this.product = _this.products.find(function (p) { return p._id === id; });
        });
        this.ngRedux.select(function (state) { return state.bids; }).subscribe(function (res) {
            _this.bids = res.bids;
        });
        this.addBidForm = this.fb.group({
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(50000)]],
            userId: ['4'],
            date: new Date()
        });
    };
    ProductDetailsComponent.prototype.onSubmit = function () {
        var bid = this.addBidForm.value;
        this.bidsActions.addBid(bid);
    };
    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product/product-details/product-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_temp_data_service__WEBPACK_IMPORTED_MODULE_3__["TempDataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_redux_store__WEBPACK_IMPORTED_MODULE_5__["NgRedux"],
            _redux_products_actions__WEBPACK_IMPORTED_MODULE_6__["ProductsActions"], _redux_bids_actions__WEBPACK_IMPORTED_MODULE_7__["BidsActions"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/product-info/product-info.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-info/product-info.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1pbmZvL3Byb2R1Y3QtaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product-info/product-info.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-info/product-info.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"\n         matTooltip=\"{{product.user.firstname}} {{product.user.lastname}}\"\n         matTooltipPosition=\"above\">\n      <img mat-card-avatar *ngIf=\"product.user.profileImage\" [src]=\"product.user.profileImage\" alt=\"profile image\">\n    </div>\n    <mat-card-title>{{product.name }}</mat-card-title>\n    <mat-card-subtitle>{{product.location}}</mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider></mat-divider><br>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <img mat-card-image *ngIf=\"product.image\" [src]=\"product.image\"\n             alt=\"image\" style=\"margin-top: 5px;\">\n      </div>\n\n      <div class=\"col-6\">\n        <p><small>Starting Price:</small></p>\n        <h4 style=\"margin-top: -15px;\">{{product.startingPrice | currency:'DKK'}}</h4>\n\n        <p><b>Start:</b> {{product.dateCreated | date}}</p>\n        <p style=\"margin-top: -15px;\"><b>End:</b> {{product.endDate | date}}</p>\n\n        <button mat-button color=\"accent\" routerLink=\"/product/product-details/{{product._id}}\" style=\"margin-left: -15px;\">More Info...</button><br>\n\n        <button mat-icon-button color=\"warn\" style=\"margin-left: -15px;\">\n          <mat-icon (click)=\"deleteProduct(product._id)\"\n                    matTooltip=\"delete\"\n                    matTooltipPosition=\"above\">delete\n          </mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"accent\" style=\"margin-left: -15px;\">\n          <mat-icon matTooltip=\"edit\"\n                    matTooltipPosition=\"above\"\n                    routerLink=\"/product/edit-auction/{{product._id}}\">edit\n          </mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/product/product-info/product-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-info/product-info.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductInfoComponent", function() { return ProductInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _redux_products_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/products.actions */ "./src/app/redux/products.actions.ts");



var ProductInfoComponent = /** @class */ (function () {
    // @Output() productOverview: EventEmitter<any> = new EventEmitter<any>();
    function ProductInfoComponent(productsActions) {
        this.productsActions = productsActions;
    }
    ProductInfoComponent.prototype.ngOnInit = function () { };
    ProductInfoComponent.prototype.deleteProduct = function (product) {
        if (!confirm('Are you sure you want to delete your product?')) {
            return;
        }
        this.productsActions.deleteProduct(product);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProductInfoComponent.prototype, "product", void 0);
    ProductInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-info',
            template: __webpack_require__(/*! ./product-info.component.html */ "./src/app/product/product-info/product-info.component.html"),
            styles: [__webpack_require__(/*! ./product-info.component.css */ "./src/app/product/product-info/product-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_redux_products_actions__WEBPACK_IMPORTED_MODULE_2__["ProductsActions"]])
    ], ProductInfoComponent);
    return ProductInfoComponent;
}());



/***/ }),

/***/ "./src/app/product/product-overview/product-overview.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/product/product-overview/product-overview.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC1vdmVydmlldy9wcm9kdWN0LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/product/product-overview/product-overview.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/product/product-overview/product-overview.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n  <p><span matBadge=\"{{ (products).length }}\" matBadgeOverlap=\"false\" matBadgeColor=\"accent\">Total items</span></p>\n</mat-card>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <mat-card class=\"example-card\">\n        <mat-form-field>\n          <input matInput placeholder=\"Search...\" [(ngModel)]=\"productSearch\">\n        </mat-form-field>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div *ngIf=\"isLoading\" style=\"margin-left: 15px;\">Please wait... We are loading products.</div>\n  <div class=\"row\" *ngIf=\"(products)?.length!=0\">\n    <div class=\"col-sm-12 col-md-6\" *ngFor=\"let p of products.slice().reverse() | productSearch: productSearch\">\n      <app-product-info [product]=\"p\"></app-product-info>\n    </div>\n  </div>\n</div>\n\n\n<!--\n<app-product-info [product]=\"p\" (productOverview)=\"onProductClick($event)\"></app-product-info>\n-->\n\n"

/***/ }),

/***/ "./src/app/product/product-overview/product-overview.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/product/product-overview/product-overview.component.ts ***!
  \************************************************************************/
/*! exports provided: ProductOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductOverviewComponent", function() { return ProductOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/temp-data.service */ "./src/app/services/temp-data.service.ts");
/* harmony import */ var _redux_products_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/products.actions */ "./src/app/redux/products.actions.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ProductOverviewComponent = /** @class */ (function () {
    function ProductOverviewComponent(ngRedux, temp, productsActions, snackBar) {
        this.ngRedux = ngRedux;
        this.temp = temp;
        this.productsActions = productsActions;
        this.snackBar = snackBar;
    }
    ProductOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsActions.getProducts();
        this.ngRedux.select(function (state) { return state.products; }).subscribe(function (res) {
            _this.products = res.products;
            _this.isLoading = res.isLoading;
        });
    };
    ProductOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-overview',
            template: __webpack_require__(/*! ./product-overview.component.html */ "./src/app/product/product-overview/product-overview.component.html"),
            styles: [__webpack_require__(/*! ./product-overview.component.css */ "./src/app/product/product-overview/product-overview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _services_temp_data_service__WEBPACK_IMPORTED_MODULE_3__["TempDataService"], _redux_products_actions__WEBPACK_IMPORTED_MODULE_4__["ProductsActions"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], ProductOverviewComponent);
    return ProductOverviewComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"color: #7b1fa2;\">\n  <button mat-button routerLink=\"./auction-overview\" routerLinkActive=\"active\">Auction Overview</button>\n  <button mat-button routerLink=\"./auction-create\" routerLinkActive=\"active\" id=\"btnNewAuction\">Add Auction</button>\n</div>\n<router-outlet></router-outlet>\n\n<!--\n<button mat-button routerLink=\"./\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"></button>\n-->\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/redux/bids.actions.ts":
/*!***************************************!*\
  !*** ./src/app/redux/bids.actions.ts ***!
  \***************************************/
/*! exports provided: BidsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidsActions", function() { return BidsActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);



var BidsActions = /** @class */ (function () {
    function BidsActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    BidsActions_1 = BidsActions;
    BidsActions.prototype.addBid = function (bid) {
        this.ngRedux.dispatch({ type: BidsActions_1.ADD_BID,
            payload: bid });
    };
    var BidsActions_1;
    BidsActions.ADD_BID = 'ADD_BID';
    BidsActions = BidsActions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], BidsActions);
    return BidsActions;
}());



/***/ }),

/***/ "./src/app/redux/bids.reducer.ts":
/*!***************************************!*\
  !*** ./src/app/redux/bids.reducer.ts ***!
  \***************************************/
/*! exports provided: INITIAL_STATE, bidsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bidsReducer", function() { return bidsReducer; });
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/temp-data.service */ "./src/app/services/temp-data.service.ts");
/* harmony import */ var _bids_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bids.actions */ "./src/app/redux/bids.actions.ts");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tassign */ "./node_modules/tassign/lib/index.js");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_2__);



var INITIAL_STATE = { bids: (_services_temp_data_service__WEBPACK_IMPORTED_MODULE_0__["TempDataService"].bids) };
function bidsReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _bids_actions__WEBPACK_IMPORTED_MODULE_1__["BidsActions"].ADD_BID:
            console.log(state);
            var newBids = state.bids.concat([action.payload]);
            var newState = Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { bids: newBids });
            console.log(newState);
            return newState;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/products.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/redux/products.actions.ts ***!
  \*******************************************/
/*! exports provided: ProductsActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsActions", function() { return ProductsActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_products_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products-api.service */ "./src/app/services/products-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProductsActions = /** @class */ (function () {
    function ProductsActions(ngRedux, api, router) {
        this.ngRedux = ngRedux;
        this.api = api;
        this.router = router;
    }
    ProductsActions_1 = ProductsActions;
    /*  actionCreateProduct(product: IProduct): void {
        this.ngRedux.dispatch(
          {type: ProductsActions.ADD_PRODUCT,
            payload: product}); }
  
      actionDeleteProduct(id: string): void {
        this.ngRedux.dispatch({
          type: ProductsActions.DELETE_PRODUCT,
          payload: id}); }
  
      actionUpdateProduct(product: IProduct): void {
        this.ngRedux.dispatch({
          type: ProductsActions.UPDATE_PRODUCT,
          payload: product}); }*/
    ProductsActions.prototype.getProducts = function () {
        var _this = this;
        this.ngRedux.dispatch({ type: ProductsActions_1.GET_PRODUCTS_LOADING });
        this.api.getProducts().subscribe(function (result) {
            console.log(result);
            _this.ngRedux.dispatch({
                type: ProductsActions_1.GET_PRODUCTS_SUCCESS,
                payload: result.filter(function (prod) { return prod.customerId === 'lauritzzzz'; })
            });
        }, function (error) {
            _this.ngRedux.dispatch({
                type: ProductsActions_1.GET_PRODUCTS_FAILURE,
                payload: error
            });
        });
    };
    ProductsActions.prototype.createNewProduct = function (product) {
        var _this = this;
        this.ngRedux.dispatch({
            type: ProductsActions_1.CREATE_PRODUCT_LOADING
        });
        // Call api
        this.api.createProduct(product).subscribe(function (DataFromWebService) {
            console.log(DataFromWebService);
            // Dispatch action on success
            _this.ngRedux.dispatch({
                type: ProductsActions_1.CREATE_PRODUCT_SUCCESS,
                payload: DataFromWebService
            });
            _this.router.navigate(['/product/auction-overview']);
            // Dispatch action on failure
        }, function (error) {
            _this.ngRedux.dispatch({
                type: ProductsActions_1.CREATE_PRODUCT_FAILURE,
                payload: error
            });
        });
    };
    ProductsActions.prototype.deleteProduct = function (id) {
        var _this = this;
        this.ngRedux.dispatch({
            type: ProductsActions_1.DELETE_PRODUCT_LOADING
        });
        this.api.deleteProduct(id).subscribe(function (DataFromWebService) {
            console.log(id, DataFromWebService);
            _this.ngRedux.dispatch({
                type: ProductsActions_1.DELETE_PRODUCT_SUCCESS,
                payload: id
            });
        }, function (error) {
            _this.ngRedux.dispatch({
                type: ProductsActions_1.DELETE_PRODUCT_FAILURE,
                payload: error
            });
        });
    };
    ProductsActions.prototype.updateProduct = function (id, product) {
        var _this = this;
        this.ngRedux.dispatch({
            type: ProductsActions_1.UPDATE_PRODUCT_LOADING
        });
        this.api.updateProduct(id, product).subscribe(function (DataFromWebService) {
            console.log(id, DataFromWebService, 'update product action');
            _this.ngRedux.dispatch({
                type: ProductsActions_1.UPDATE_PRODUCT_SUCCESS,
                payload: id, DataFromWebService: DataFromWebService
            });
            _this.router.navigate(['/product/auction-overview']);
        }, function (error) {
            _this.ngRedux.dispatch({
                type: ProductsActions_1.UPDATE_PRODUCT_FAILURE,
                payload: error
            });
        });
    };
    var ProductsActions_1;
    ProductsActions.GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
    ProductsActions.GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
    ProductsActions.GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';
    ProductsActions.CREATE_PRODUCT_LOADING = 'CREATE_PRODUCT_LOADING';
    ProductsActions.CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
    ProductsActions.CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';
    ProductsActions.DELETE_PRODUCT_LOADING = 'DELETE_PRODUCT_LOADING';
    ProductsActions.DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
    ProductsActions.DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';
    ProductsActions.UPDATE_PRODUCT_LOADING = 'UPDATE_PRODUCT_LOADING';
    ProductsActions.UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
    ProductsActions.UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';
    ProductsActions = ProductsActions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"], _services_products_api_service__WEBPACK_IMPORTED_MODULE_3__["ProductsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductsActions);
    return ProductsActions;
}());



/***/ }),

/***/ "./src/app/redux/products.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/redux/products.reducer.ts ***!
  \*******************************************/
/*! exports provided: INITIAL_STATE, productsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsReducer", function() { return productsReducer; });
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/temp-data.service */ "./src/app/services/temp-data.service.ts");
/* harmony import */ var _products_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.actions */ "./src/app/redux/products.actions.ts");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tassign */ "./node_modules/tassign/lib/index.js");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_2__);



var INITIAL_STATE = { products: _services_temp_data_service__WEBPACK_IMPORTED_MODULE_0__["TempDataService"].products, isLoading: false };
function productsReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        // API
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].GET_PRODUCTS_LOADING:
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { isLoading: true });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].GET_PRODUCTS_SUCCESS:
            console.log(action.payload);
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { products: action.payload, isLoading: false });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].GET_PRODUCTS_FAILURE:
            console.log(action.payload);
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { isLoading: false });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].CREATE_PRODUCT_FAILURE:
            // display an error message
            console.log(action.payload);
            return state;
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].CREATE_PRODUCT_LOADING:
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { isLoading: true });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].CREATE_PRODUCT_SUCCESS:
            // Create a new array with the "old array" and the new product
            console.log(state);
            var newProducts = state.products.concat([action.payload]);
            var newState = Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { products: newProducts, isLoading: false });
            console.log(newState);
            return newState;
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].DELETE_PRODUCT_FAILURE:
            console.log(action.payload);
            return state;
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].DELETE_PRODUCT_LOADING:
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { isLoading: true });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].DELETE_PRODUCT_SUCCESS:
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                products: state.products.filter(function (prod) { return prod._id !== action.payload; }), isLoading: false
            });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].UPDATE_PRODUCT_FAILURE:
            console.log(action.payload);
            return state;
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].UPDATE_PRODUCT_LOADING:
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { isLoading: true });
        case _products_actions__WEBPACK_IMPORTED_MODULE_1__["ProductsActions"].UPDATE_PRODUCT_SUCCESS:
            console.log(state);
            var stateBeforeUpdate = state.products.slice();
            var index = stateBeforeUpdate.findIndex(function (prod) { return prod._id === action.payload._id; });
            var stateAfterUpdate = state.products.slice(0, index).concat(action.payload, state.products.slice(index + 1));
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, { products: stateAfterUpdate });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/redux/users.actions.ts":
/*!****************************************!*\
  !*** ./src/app/redux/users.actions.ts ***!
  \****************************************/
/*! exports provided: UsersActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersActions", function() { return UsersActions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__);



var UsersActions = /** @class */ (function () {
    function UsersActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    UsersActions_1 = UsersActions;
    UsersActions.prototype.actionAddUser = function (user) {
        this.ngRedux.dispatch({
            type: UsersActions_1.ADD_USER,
            payload: user
        });
    };
    UsersActions.prototype.actionDeleteUser = function (id) {
        this.ngRedux.dispatch({
            type: UsersActions_1.DELETE_USER,
            payload: id
        });
    };
    var UsersActions_1;
    UsersActions.ADD_USER = 'ADD_USER';
    UsersActions.DELETE_USER = 'DELETE_USER';
    UsersActions = UsersActions_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_2__["NgRedux"]])
    ], UsersActions);
    return UsersActions;
}());



/***/ }),

/***/ "./src/app/redux/users.reducer.ts":
/*!****************************************!*\
  !*** ./src/app/redux/users.reducer.ts ***!
  \****************************************/
/*! exports provided: INITIAL_STATE, usersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersReducer", function() { return usersReducer; });
/* harmony import */ var _services_temp_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/temp-data.service */ "./src/app/services/temp-data.service.ts");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.actions */ "./src/app/redux/users.actions.ts");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tassign */ "./node_modules/tassign/lib/index.js");
/* harmony import */ var tassign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tassign__WEBPACK_IMPORTED_MODULE_2__);



var INITIAL_STATE = { users: _services_temp_data_service__WEBPACK_IMPORTED_MODULE_0__["TempDataService"].users };
function usersReducer(state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case _users_actions__WEBPACK_IMPORTED_MODULE_1__["UsersActions"].ADD_USER:
            action.payload._id = state.users.length + 1;
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                users: state.users.concat(Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(action.payload))
            });
        case _users_actions__WEBPACK_IMPORTED_MODULE_1__["UsersActions"].DELETE_USER:
            return Object(tassign__WEBPACK_IMPORTED_MODULE_2__["tassign"])(state, {
                users: state.users.filter(function (u) { return u._id !== action.payload; })
            });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/services/product-search.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/services/product-search.pipe.ts ***!
  \*************************************************/
/*! exports provided: ProductSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchPipe", function() { return ProductSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductSearchPipe = /** @class */ (function () {
    function ProductSearchPipe() {
    }
    ProductSearchPipe.prototype.transform = function (products, search) {
        if (search === void 0) { search = ''; }
        console.log(search);
        console.log(products);
        return products.filter(function (product) {
            return product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase()) ||
                product.location.toLowerCase().includes(search.toLowerCase()) ||
                (product.user && (product.user.firstname + '' + product.user.lastname)).toLowerCase().includes(search.toLowerCase());
        });
    };
    ProductSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'productSearch'
        })
    ], ProductSearchPipe);
    return ProductSearchPipe;
}());



/***/ }),

/***/ "./src/app/services/products-api.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/products-api.service.ts ***!
  \**************************************************/
/*! exports provided: ProductsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsApiService", function() { return ProductsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductsApiService = /** @class */ (function () {
    function ProductsApiService(http) {
        this.http = http;
        this.baseUrl = 'http://angular2api2.azurewebsites.net/api/internships';
    }
    ProductsApiService.prototype.getProducts = function () {
        return this.http.get(this.baseUrl);
    };
    ProductsApiService.prototype.createProduct = function (product) {
        product.customerId = 'lauritzzzz';
        return this.http.post(this.baseUrl, product);
    };
    ProductsApiService.prototype.deleteProduct = function (id) {
        var url = this.baseUrl + "/" + id;
        return this.http.delete(url, { responseType: 'text' });
    };
    ProductsApiService.prototype.updateProduct = function (id, product) {
        product.customerId = 'lauritzzzz';
        var url = this.baseUrl + "/" + id;
        return this.http.put(url, product, { responseType: 'text' });
    };
    ProductsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsApiService);
    return ProductsApiService;
}());



/***/ }),

/***/ "./src/app/services/temp-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/temp-data.service.ts ***!
  \***********************************************/
/*! exports provided: TempDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempDataService", function() { return TempDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TempDataService = /** @class */ (function () {
    /*  bids: IBid[] = [
        {_id: '1', userId: '4', amount: 34500, date: new Date(2019, 5, 10)}
      ];*/
    /*products: IProduct[] = [
      {
        _id: '1',
        name: 'Leather Egg Chair - Inspired By Designs of Arne Jacobsen',
        image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/' +
          'Images/XPI/ab9a8aa4-e1ce-24fa-5364-038e4aa68e5c.jpg&Width=1200&Crompression=90',
        description: 'Jacobsen’s beautifully sculpted Egg Chair could just be the most recognisable chair ' +
          'of our times. So if you’re thinking of buying one, you need to know you’re getting a lot more than a style icon…',
        location: 'Copenhagen',
        endDate: new Date(2019, 10, 12),
        dateCreated: new Date(2019, 4, 10),
        user: {_id: '1', username: 'smarty',
          profileImage: 'https://archive.icann.org/en/biog/photos/brent-big.jpg',
          firstname: 'Jens', lastname: 'Jensen',
          email: 'jensen@gmail.com',
          password: '123456',
          phone: '23453256',
          birthDate: new Date(1969, 8, 13),
          isAdmin: false
          },
        startingPrice: 47500,
        bids: [
          {_id: '1', userId: '1', amount: 47500, date: new Date (2019, 4, 10)},
          {_id: '2', userId: '2', amount: 48000, date: new Date (2019, 4, 11)}
        ]
      },
  
      {
        _id: '2',
        name: 'OKSEN Lounge Chair - Inspired By Designs of Arne Jacobsen',
        image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/XPI/' +
          'a1dd0797-09a7-dcaf-cb31-df18a8c89d16.jpg&Width=1200&Crompression=90',
        description: 'Oksen comes in leather only and in three different leather types: ' +
          'The beautiful Grace leather and the strong Aura leather in black or Walnut and finally in Wild leather in black only.',
        location: 'Copenhagen',
        endDate: new Date(2019, 11, 15),
        dateCreated: new Date(2019, 4, 12),
        user: {_id: '2', username: 'bigboss',
          profileImage: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg',
          firstname: 'Simon', lastname: 'Simonsen',
          email: 'simonsen@gmail.com',
          password: '123456',
          phone: '56789456',
          birthDate: new Date(1967, 12, 26),
          isAdmin: false
          },
        startingPrice: 38000,
        bids: [
          {_id: '1', userId: '2', amount: 38000, date: new Date (2019, 4, 12)}
        ]
      }
    ];
  */
    function TempDataService() {
    }
    TempDataService.users = [
        {
            _id: '1', username: 'smarty',
            profileImage: 'https://archive.icann.org/en/biog/photos/brent-big.jpg',
            firstname: 'Jens', lastname: 'Jensen',
            email: 'jensen@gmail.com',
            password: '123456',
            phone: '23453256',
            birthDate: new Date(1969, 8, 13),
            isAdmin: false
        },
        {
            _id: '2', username: 'bigboss',
            profileImage: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg',
            firstname: 'Simon', lastname: 'Simonsen',
            email: 'simonsen@gmail.com',
            password: '123456',
            phone: '56789456',
            birthDate: new Date(1967, 12, 26),
            isAdmin: false
        },
        {
            _id: '3', username: 'admin',
            profileImage: 'https://archive.icann.org/en/biog/photos/ashton-hart.jpg',
            firstname: 'Ashton', lastname: 'Hart',
            email: 'admin@gmail.com',
            password: '123456',
            phone: '34536789',
            birthDate: new Date(1985, 10, 13),
            isAdmin: true
        }
    ];
    TempDataService.products = [
        {
            _id: '1',
            name: 'Leather Egg Chair - Inspired By Designs of Arne Jacobsen',
            image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/' +
                'Images/XPI/ab9a8aa4-e1ce-24fa-5364-038e4aa68e5c.jpg&Width=1200&Crompression=90',
            description: 'Jacobsen’s beautifully sculpted Egg Chair could just be the most recognisable chair ' +
                'of our times. So if you’re thinking of buying one, you need to know you’re getting a lot more than a style icon…',
            location: 'Copenhagen',
            endDate: new Date(2019, 10, 12),
            dateCreated: new Date(2019, 4, 10),
            user: {
                _id: '1', username: 'smarty',
                profileImage: 'https://archive.icann.org/en/biog/photos/brent-big.jpg',
                firstname: 'Jens', lastname: 'Jensen',
                email: 'jensen@gmail.com',
                password: '123456',
                phone: '23453256',
                birthDate: new Date(1969, 8, 13),
                isAdmin: false
            },
            startingPrice: 47500,
            bids: [
                { _id: '1', userId: '2', amount: 47500, date: new Date(2019, 4, 10) },
                { _id: '2', userId: '2', amount: 48000, date: new Date(2019, 4, 11) }
            ]
        },
        {
            _id: '2',
            name: 'OKSEN Lounge Chair - Inspired By Designs of Arne Jacobsen',
            image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/XPI/' +
                'a1dd0797-09a7-dcaf-cb31-df18a8c89d16.jpg&Width=1200&Crompression=90',
            description: 'Oksen comes in leather only and in three different leather types: ' +
                'The beautiful Grace leather and the strong Aura leather in black or Walnut and finally in Wild leather in black only.',
            location: 'Copenhagen',
            endDate: new Date(2019, 11, 15),
            dateCreated: new Date(2019, 4, 12),
            user: {
                _id: '2', username: 'bigboss',
                profileImage: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg',
                firstname: 'Simon', lastname: 'Simonsen',
                email: 'simonsen@gmail.com',
                password: '123456',
                phone: '56789456',
                birthDate: new Date(1967, 12, 26),
                isAdmin: false
            },
            startingPrice: 38000,
            bids: [
                { _id: '1', userId: '2', amount: 38000, date: new Date(2019, 4, 12) }
            ]
        }
    ];
    TempDataService.bids = [
        { _id: '1', userId: '4', amount: 49500, date: new Date(2019, 5, 10) }
    ];
    TempDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TempDataService);
    return TempDataService;
}());



/***/ }),

/***/ "./src/app/store.ts":
/*!**************************!*\
  !*** ./src/app/store.ts ***!
  \**************************/
/*! exports provided: ProductState, UserState, BidState, IAppState, rootReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductState", function() { return ProductState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserState", function() { return UserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidState", function() { return BidState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAppState", function() { return IAppState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-redux/router */ "./node_modules/@angular-redux/router/lib/es5/src/index.js");
/* harmony import */ var _angular_redux_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_products_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/products.reducer */ "./src/app/redux/products.reducer.ts");
/* harmony import */ var _redux_users_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/users.reducer */ "./src/app/redux/users.reducer.ts");
/* harmony import */ var _redux_bids_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/bids.reducer */ "./src/app/redux/bids.reducer.ts");





var ProductState = /** @class */ (function () {
    function ProductState() {
    }
    return ProductState;
}());

var UserState = /** @class */ (function () {
    function UserState() {
    }
    return UserState;
}());

var BidState = /** @class */ (function () {
    function BidState() {
    }
    return BidState;
}());

var IAppState = /** @class */ (function () {
    function IAppState() {
    }
    return IAppState;
}());

var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    products: _redux_products_reducer__WEBPACK_IMPORTED_MODULE_2__["productsReducer"],
    users: _redux_users_reducer__WEBPACK_IMPORTED_MODULE_3__["usersReducer"],
    bids: _redux_bids_reducer__WEBPACK_IMPORTED_MODULE_4__["bidsReducer"],
    router: _angular_redux_router__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
});


/***/ }),

/***/ "./src/app/user/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/user/login/login.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/user/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center align-items-center h-100\">\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n      <mat-card class=\"example-card container\">\n        <mat-card-title id=\"loginTitle\">Login</mat-card-title>\n        <mat-divider></mat-divider>\n\n        <p class=\"small\" style=\"margin-top: 15px; color: #f44336;\">{{message}}</p>\n\n\n\n<!--        <h2>LOGIN</h2>\n        <p>{{message}}</p>\n        <p>\n          <button (click)=\"login()\"  *ngIf=\"!authService.isLoggedIn\">Login</button>\n          <button (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n        </p>-->\n\n\n\n        <form class=\"example-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" *ngIf=\"!authService.isLoggedIn\">\n\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n            <mat-error\n              *ngIf=\"loginForm.controls.username.errors?.required && loginForm.controls.username.touched && loginForm.controls.username.dirty\">\n              The Username field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"loginForm.controls.username.errors?.minlength\">\n              The Username field must be at least 3 characters\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\" required>\n            <mat-error\n              *ngIf=\"loginForm.controls.password.errors?.required && loginForm.controls.password.touched && loginForm.controls.password.dirty\">\n              The Password field is required!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!loginForm.valid\" id=\"btnUserlogin\">Login</button><br><br>\n\n          <mat-divider></mat-divider><br>\n          <p>Need a registration?</p>\n          <button mat-button color=\"accent\" routerLink=\"/register\" routerLinkActive=\"active\" style=\"margin-left: -15px; margin-top: -15px;\">\n            Go to register...</button>\n\n        </form>\n\n        <button mat-raised-button color=\"primary\" routerLink=\"/product/auction-overview\"\n                style=\"margin-left: 0;\" *ngIf=\"authService.isLoggedIn\">Go to Auction Overview</button><br>\n\n        <button mat-raised-button color=\"warn\" class=\"float-right\" style=\"margin-top: -35px;\" (click)=\"logout()\" *ngIf=\"authService.isLoggedIn\">Logout</button>\n\n      </mat-card>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users.actions */ "./src/app/redux/users.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngRedux, fb, usersActions, router, authService) {
        this.ngRedux = ngRedux;
        this.fb = fb;
        this.usersActions = usersActions;
        this.router = router;
        this.authService = authService;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = 'You are logged ' + (this.authService.isLoggedIn ? 'in.' : 'out.');
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.router.parseUrl(_this.authService.redirectUrl) : '/product/auction-overview';
                // Redirect the user
                _this.router.navigateByUrl(redirect);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__["UsersActions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/rating/rating.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/rating/rating.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.rating {\r\n  float:left;\r\n}\r\n\r\n.rating:not(:checked) > input {\r\n  position:absolute;\r\n  top:-9999px;\r\n  clip:rect(0,0,0,0);\r\n}\r\n\r\n.rating:not(:checked) > label {\r\n  float:right;\r\n  width:1em;\r\n  padding:0.1em;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  cursor:pointer;\r\n  font-size:200%;\r\n  line-height:1.2;\r\n  color:#ddd;\r\n}\r\n\r\n.rating:not(:checked) > label:before {\r\n  content: '★ ';\r\n}\r\n\r\n.rating > input:checked ~ label {\r\n  color: #f70;\r\n}\r\n\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n  color: gold;\r\n}\r\n\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n  color: #ea0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2I7O0FBR0E7OztFQUdFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yYXRpbmcge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGlucHV0IHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6LTk5OTlweDtcclxuICBjbGlwOnJlY3QoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcclxuICBmbG9hdDpyaWdodDtcclxuICB3aWR0aDoxZW07XHJcbiAgcGFkZGluZzowLjFlbTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgd2hpdGUtc3BhY2U6bm93cmFwO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZToyMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OjEuMjtcclxuICBjb2xvcjojZGRkO1xyXG59XHJcblxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICfimIUgJztcclxufVxyXG5cclxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgY29sb3I6ICNmNzA7XHJcbn1cclxuXHJcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxyXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcclxuICBjb2xvcjogZ29sZDtcclxufVxyXG5cclxuXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXHJcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcclxuLnJhdGluZyA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICBjb2xvcjogI2VhMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/rating/rating.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/rating/rating.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset class=\"rating\">\n  <input type=\"radio\" [name]=\"inputName\" value=\"5\" [checked]=\"rating===5\" />\n  <label title=\"Rocks!\" (click)='onClick(5)'>5 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"4\" [checked]=\"rating===4\" />\n  <label title=\"Pretty good\" (click)='onClick(4)'>4 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"3\" [checked]=\"rating===3\" />\n  <label title=\"Meh\" (click)='onClick(3)'>3 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"2\" [checked]=\"rating===2\" />\n  <label title=\"Kinda bad\" (click)='onClick(2)'>2 stars</label>\n\n  <input type=\"radio\" [name]=\"inputName\" value=\"1\" [checked]=\"rating===1\" />\n  <label title=\"Sucks big time\" (click)='onClick(1)'>1 star</label>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/user/rating/rating.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/rating/rating.component.ts ***!
  \*************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.ratingClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RatingComponent.prototype.ngOnInit = function () {
        this.inputName = this.itemId + '_rating';
    };
    RatingComponent.prototype.onClick = function (rating) {
        this.rating = rating;
        this.ratingClick.emit({
            itemId: this.itemId,
            rating: rating
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RatingComponent.prototype, "itemId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], RatingComponent.prototype, "ratingClick", void 0);
    RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/user/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/user/rating/rating.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/user/register/register.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/register/register.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/register/register.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/register/register.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center align-items-center h-100\">\n    <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n      <mat-card class=\"example-card container\">\n        <mat-card-title>Register</mat-card-title>\n        <mat-divider></mat-divider>\n        <br>\n\n        <form class=\"example-form\" (ngSubmit)=\"onSubmit()\" [formGroup]=\"registerForm\">\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Username\" formControlName=\"username\" required>\n            <mat-error\n              *ngIf=\"registerForm.controls.username.errors?.required && registerForm.controls.username.touched && registerForm.controls.username.dirty\">\n              The Username field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"registerForm.controls.username.errors?.minlength\">\n              The Username field must be at least 3 characters\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"First Name\" formControlName=\"firstname\" required>\n            <mat-error\n              *ngIf=\"registerForm.controls.firstname.errors?.required && registerForm.controls.firstname.touched && registerForm.controls.firstname.dirty\">\n              The First Name field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"registerForm.controls.firstname.errors?.minlength\">\n              The First Name field must be at least 3 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Last Name\" formControlName=\"lastname\" required>\n            <mat-error\n              *ngIf=\"registerForm.controls.lastname.errors?.required && registerForm.controls.lastname.touched && registerForm.controls.lastname.dirty\">\n              The Last Name field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"registerForm.controls.lastname.errors?.minlength\">\n              The Last Name field must be at least 3 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" formControlName=\"email\" required>\n            <mat-error\n              *ngIf=\"registerForm.controls.email.errors?.required && registerForm.controls.email.touched && registerForm.controls.email.dirty\">\n              The Email field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"registerForm.controls.email.errors?.email\">\n              The Email field is not valid!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" formControlName=\"password\" required>\n            <mat-error\n              *ngIf=\"registerForm.controls.password.errors?.required && registerForm.controls.password.touched && registerForm.controls.password.dirty\">\n              The Password field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"registerForm.controls.password.errors?.minlength\">\n              The Password field must be at least 5s characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Phone\" formControlName=\"phone\" required>\n            <mat-error\n              *ngIf=\"registerForm.controls.phone.errors?.required && registerForm.controls.phone.touched && registerForm.controls.phone.dirty\">\n              The Phone field is required!\n            </mat-error>\n            <mat-error\n              *ngIf=\"registerForm.controls.phone.errors?.minlength\">\n              The Phone field must be 8 characters!\n            </mat-error>\n          </mat-form-field>\n          <br>\n\n          <div>\n            <mat-form-field>\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Birth Date\" formControlName=\"birthDate\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker #picker touchUi=\"true\"></mat-datepicker>\n            </mat-form-field>\n          </div>\n\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!registerForm.valid\">Register\n          </button>\n        </form><br>\n        <mat-divider></mat-divider><br>\n        <p>Already registered?</p>\n        <button mat-button color=\"accent\" routerLink=\"/login\" routerLinkActive=\"active\" style=\"margin-left: -15px; margin-top: -15px;\">Go to login...</button>\n\n      </mat-card>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user/register/register.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/register/register.component.ts ***!
  \*****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users.actions */ "./src/app/redux/users.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(ngRedux, fb, usersActions, route) {
        this.ngRedux = ngRedux;
        this.fb = fb;
        this.usersActions = usersActions;
        this.route = route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.fb.group({
            _id: [''],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            profileImage: 'https://archive.icann.org/en/biog/photos/akcin-big.jpg',
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            birthDate: new Date(),
            isAdmin: false
        });
        this.ngRedux.select(function (state) { return state.users; }).subscribe(function (res) {
            _this.users = res.users;
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var user = this.registerForm.value;
        this.usersActions.actionAddUser(user);
        this.route.navigate(['/login']);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__["UsersActions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user-rating/user-rating.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/user-rating/user-rating.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1yYXRpbmcvdXNlci1yYXRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user-rating/user-rating.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/user-rating/user-rating.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <mat-card class=\"example-card\">\n        <mat-card-title>Rate a Seller</mat-card-title>\n      </mat-card>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"row\" *ngIf=\"(users)?.length!=0\">\n    <div class=\"col-sm-12 col-md-6\" *ngFor=\"let user of users\">\n      <div *ngIf=\"user.isAdmin===false\">\n\n        <mat-card class=\"example-card\">\n\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\">\n              <img mat-card-avatar [src]=\"user.profileImage\" alt=\"profile image\">\n            </div>\n            <mat-card-title>{{user.firstname }} {{user.lastname}}</mat-card-title>\n            <br><br>\n          </mat-card-header>\n          <mat-divider></mat-divider>\n          <app-rating></app-rating>\n          <div class=\"text-right\">\n            <button mat-button color=\"accent\" routerLink=\" \" style=\"margin-top: 30px; align-self: end;\">More Info...</button>\n          </div>\n        </mat-card>\n\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/user-rating/user-rating.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-rating/user-rating.component.ts ***!
  \***********************************************************/
/*! exports provided: UserRatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRatingComponent", function() { return UserRatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/users.actions */ "./src/app/redux/users.actions.ts");





var UserRatingComponent = /** @class */ (function () {
    function UserRatingComponent(ngRedux, fb, usersActions) {
        this.ngRedux = ngRedux;
        this.fb = fb;
        this.usersActions = usersActions;
    }
    UserRatingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngRedux.select(function (state) { return state.users; }).subscribe(function (res) {
            _this.users = res.users;
        });
    };
    UserRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-rating',
            template: __webpack_require__(/*! ./user-rating.component.html */ "./src/app/user/user-rating/user-rating.component.html"),
            styles: [__webpack_require__(/*! ./user-rating.component.css */ "./src/app/user/user-rating/user-rating.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_redux_store__WEBPACK_IMPORTED_MODULE_3__["NgRedux"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _redux_users_actions__WEBPACK_IMPORTED_MODULE_4__["UsersActions"]])
    ], UserRatingComponent);
    return UserRatingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Olga\git\lauritz-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map