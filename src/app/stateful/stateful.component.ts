import { Component, OnInit, ViewChild } from '@angular/core';

import { Shop } from '../models/shop.model';
import { Product } from '../interfaces/product';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.css'],
})
export class StatefulComponent implements OnInit {
  @ViewChild(ConfirmComponent, { static: false })
  confirmChild!: ConfirmComponent;
  shopModel: Shop = new Shop();
  boughtItems: Array<Product>;

  constructor() {
    this.boughtItems = [];
  }

  ngOnInit(): void {}
  clickItem(_product: Product): void {
    this.boughtItems.push(_product);
  }
  productBought(_event: Product) {
    this.clickItem(_event);
    this.confirmChild.isDisabled = false;
  }

  totalPrice() {
    if (this.boughtItems) {
      return this.boughtItems.reduce(
        (prev: number, item: Product) => prev + item.price!,
        0
      );
    } else return 0;
  }
}
