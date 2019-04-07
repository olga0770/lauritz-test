import { Component, OnInit } from '@angular/core';
import {IProduct} from '../item';
import { TempDataService } from '../services/temp-data.service';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tempItems: IProduct[];
  @select() items;

  constructor(private temp: TempDataService, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.tempItems = this.temp.getProducts();
  }
}
