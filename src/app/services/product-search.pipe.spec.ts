import { ProductSearchPipe } from './product-search.pipe';
import {TempDataService} from './temp-data.service';
import {IProduct} from '../item';

fdescribe('ProductSearchPipe', () => {

  it('create an instance', () => {
    const pipe = new ProductSearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('return all products when search is empty', () => {
    const prodArray = TempDataService.products;
    const pipe = new ProductSearchPipe();
    const result: IProduct[] = pipe.transform(prodArray, '');
    expect(result).toEqual(prodArray);
  });
});
