import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IProduct} from '../item';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  baseUrl = 'http://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.baseUrl) as Observable<IProduct[]>;
  }

  createProduct(product: IProduct): Observable<any> {
    product.customerId = 'lauritzzzz';
    product.user = {
      _id: '3', username: 'monkey',
      profileImage: 'https://archive.icann.org/en/biog/photos/chalaby-profile.jpg',
      firstname: 'Dan', lastname: 'Christensen',
      email: 'christensen@gmail.com',
      password: '123456',
      phone: '23125678',
      birthDate: new Date(1971, 1, 2),
      isAdmin: false
    };
    return this.http.post(this.baseUrl, product);
  }


  deleteProduct(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);



  }






}
