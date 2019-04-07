import { Injectable } from '@angular/core';
import { IProduct } from '../item';
import { IBid } from '../item';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {


  tempItems: IProduct[] = [
    {
    id: '1',
    name: 'Leather Egg Chair - Inspired By Designs of Arne Jacobsen',
    image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/' +
      'Images/XPI/ab9a8aa4-e1ce-24fa-5364-038e4aa68e5c.jpg&Width=1200&Crompression=90',
    description: 'Jacobsen’s beautifully sculpted Egg Chair could just be the most recognisable chair ' +
      'of our times. So if you’re thinking of buying one, you need to know you’re getting a lot more than a style icon…',
    location: 'Copenhagen',
    endDate: new Date(2019, 10, 12),
    dateCreated: new Date(2019, 4, 10),
    user: {id: '1', username: 'smarty',
      profileImage: 'https://archive.icann.org/en/biog/photos/brent-big.jpg',
      firstname: 'Jens', lastname: 'Jensen'},
      startingPrice: 47500,
      bids: [
        {id: '1', userId: '2', amount: 48000, date: new Date (2019, 4, 11)}
      ]
  },

    {
      id: '2',
      name: 'OKSEN Lounge Chair - Inspired By Designs of Arne Jacobsen',
      image: 'https://static.illumsbolighus.dk/Admin/Public/GetImage.ashx?Image=/Files/Images/XPI/' +
        'a1dd0797-09a7-dcaf-cb31-df18a8c89d16.jpg&Width=1200&Crompression=90',
      description: 'Oksen comes in leather only and in three different leather types: ' +
        'The beautiful Grace leather and the strong Aura leather in black or Walnut and finally in Wild leather in black only.',
      location: 'Copenhagen',
      endDate: new Date(2019, 11, 15),
      dateCreated: new Date(2019, 4, 12),
      user: {id: '1', username: 'bigboss',
        profileImage: 'https://amp.businessinsider.com/images/5899ffcf6e09a897008b5c04-750-750.jpg',
        firstname: 'Simon', lastname: 'Simonsen'},
      startingPrice: 38000,
      bids: []
    }
];

  constructor() { }

  getProducts() {
    return this.tempItems;
  }

  findProduct(id: string): IProduct {
    return this.tempItems.find(tempItemSingle => tempItemSingle.id === id);
  }

  addBid(bid: IBid, productId: string): void {
    const tempProduct = this.findProduct(productId);
    tempProduct.bids = [
      {id: '1', userId: '1', date: new Date(), amount: 0}
    ];
    tempProduct.bids.push(bid);
  }

}
