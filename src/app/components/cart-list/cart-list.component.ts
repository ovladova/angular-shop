import { Component, OnInit } from '@angular/core';
import { CartService } from "../../shared/services";
import {Product} from "../../shared/models/interfaces";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  products: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.cartService.getProducts();
  }

  trackByFn(index: number, item: Product){
    return item.id;
  }
}
