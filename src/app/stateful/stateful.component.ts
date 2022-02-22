import { Component, OnInit } from '@angular/core';

import {Shop} from "../models/shop.model";
import {Product} from "../interfaces/product";

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css']
})
export class StatefulComponent implements OnInit {
  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;

  constructor() {
    this.boughtItems = [];
  }

  ngOnInit(): void {
  }
  clickItem(_product: Product): void{
    this.boughtItems.push(_product);
  }
}
