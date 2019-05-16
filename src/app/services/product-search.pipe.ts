import { Pipe, PipeTransform } from '@angular/core';
import {IProduct} from '../item';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: IProduct[], search: any = ''): any {
    console.log(search);
    console.log(products);

    return products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.location.toLowerCase().includes(search.toLowerCase())  ||

      (product.user && (product.user.firstname + '' + product.user.lastname)).toLowerCase().includes(search.toLowerCase())
    );
  }

}
