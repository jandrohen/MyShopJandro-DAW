import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
})
export class StatelessComponent implements OnInit {
  @Input() product!: Product;
  @Output() productBought: EventEmitter<Product> = new EventEmitter();
  compra = 'comprar';
  disable = false;

  constructor() {}
  ngOnInit(): void {}

  bought() {
    this.disable = true;
    this.compra = '!Comprado!';
    this.productBought.emit(this.product);
  }
  isDisabled() {
    return this.disable;
  }
}
