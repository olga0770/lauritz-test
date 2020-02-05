import { ProductState } from '../store';
import { TempDataService } from '../services/temp-data.service';
const deepFreeze = require('deep-freeze-strict');
import { productsReducer } from './products.reducer';
import * as types from './products.actions';
import { IProduct, IUser, IBid } from '../item';

fdescribe('products reducer', () => {

  it('should create a new product', () => {
    const stateBefore = {products: []} as ProductState;
    deepFreeze(stateBefore); // freeze to protect the original state

    const product = {
      _id: '3',
      name: 'Leather Egg Chair - Inspired By Designs of Arne Jacobsen',
      image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/' +
        'Images/XPI/ab9a8aa4-e1ce-24fa-5364-038e4aa68e5c.jpg&Width=1200&Crompression=90',
      description: 'Jacobsen’s beautifully sculpted Egg Chair could just be the most recognisable chair ' +
        'of our times. So if you’re thinking of buying one, you need to know you’re getting a lot more than a style icon…',
      location: 'Aarhus',
      endDate: new Date(2019, 12, 12),
      dateCreated: new Date(2019, 7, 10),
      user: {_id: '1', username: 'smarty',
        profileImage: 'https://archive.icann.org/en/biog/photos/brent-big.jpg',
        firstname: 'Peter', lastname: 'Simonsen'},
      startingPrice: 32500,
      bids: [
        {_id: '1', userId: '1', amount: 32500, date: new Date (2019, 7, 10)}
      ]
    };
    // the expected state:
    const expectedStateAfter = {products: [product], isLoading: false};
    // the actual operation that we want to test:
    const response = productsReducer(stateBefore, {
      type: types.ProductsActions.CREATE_PRODUCT_SUCCESS, payload: product});
    expect(expectedStateAfter).toEqual(response);
  });


  it('should test slice', () => {
    const array = ['hat', 'cat', 'sad', 'dog'];
    const pos = array.findIndex(x => x === 'sad');
    const array2 = [...array.slice(0, pos), 'hi', ...array.slice(pos + 1)];
    expect(array2).toEqual(['hat', 'cat', 'hi', 'dog']);
  });



  it('should update a product object', () => {
    const beforeState = {products: [
        {_id: '1', name: 'Egg Lounge Chair indian red'},
        {_id: '2', name: 'Herman Lounge Chair black'},
        {_id: '3', name: 'EJ 110 Asko Chair'}]} as ProductState;
    deepFreeze(beforeState);
    const afterState = {products: [
        {_id: '1', name: 'Egg Lounge Chair indian red'},
        {_id: '2', name: 'EJ5 Corona Armchair cognac'},
        {_id: '3', name: 'EJ 110 Asko Chair'}]} as ProductState;
    const response = productsReducer(beforeState, {type: types.ProductsActions.UPDATE_PRODUCT_SUCCESS,
      payload: {_id: '2', name: 'EJ5 Corona Armchair cognac'}});
    expect(afterState).toEqual(response);
  });


  it('should delete a product from the products array based on an id', () => {
    // 1: Create a start-state with some product objects (could be reduced, with fewer properties as long as you have _id)
    // 2: Deep freeze to check for immutability
    // 3: Create the after-state (this is our expectation of what the state should look like after calling the reducer)
    // 4: Call the reducer
    // 5: expect statements (assert)

    const beforeState = {products: [
        {_id: '1', name: 'Hair Brush'},
        {_id: '2', name: 'Nail conditioner'},
        {_id: '3', name: 'Nail psykologist'}]} as ProductState;
    deepFreeze(beforeState);
    const afterState = {products: [
        {_id: '1', name: 'Hair Brush'},
        {_id: '3', name: 'Nail psykologist'}], isLoading: false};
    const response = productsReducer(beforeState, {type: types.ProductsActions.DELETE_PRODUCT_SUCCESS, payload: '2'});
    expect(afterState).toEqual(response);
  });

});
