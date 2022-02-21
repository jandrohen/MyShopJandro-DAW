import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../interfaces/product";

@Component({
  selector: 'app-stateless',
  templateUrl: './stateless.component.html',
  styleUrls: ['./stateless.component.css']
})
export class StatelessComponent implements OnInit {
  @Input() product!: Product;
  constructor() { }
  ngOnInit(): void {
    this.product ={}
  }
}

