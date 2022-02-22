import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css'],
})
export class StatelessComponent implements OnInit {
  @Input() product!: Product;
  compra = 'comprar';
  disable = false;

  constructor() {}
  ngOnInit(): void {}

  bought() {
    this.disable = true;
    this.compra = '!Comprado!';
  }
  isDisabled() {
    return this.disable;
  }
}
