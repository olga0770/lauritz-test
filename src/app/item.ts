export interface IProduct {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  endDate: Date;
  dateCreated: Date;
  user: IUser;
  startingPrice: number;
  bids: IBid[];
}


export interface IUser {
  id: string;
  username: string;
  profileImage: string;
  firstname: string;
  lastname: string;
}


export interface IBid {
  id: string;
  userId: string;
  amount: number;
  date: Date;
}
