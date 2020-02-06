import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IProduct} from '../item';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  baseUrl = 'https://angular2api2.azurewebsites.net/api/internships';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.baseUrl) as Observable<IProduct[]>;
  }

  createProduct(product: IProduct): Observable<any> {
    product.customerId = 'lauritzzzz';
    return this.http.post(this.baseUrl, product);
  }

  deleteProduct(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, {responseType: 'text'});
  }

  updateProduct(id: string, product: IProduct): Observable<any> {
    product.customerId = 'lauritzzzz';
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, product, {responseType: 'text'});
  }


}
