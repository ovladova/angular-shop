import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../shared/services";
import {Product} from "../../../shared/models/interfaces";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  products: Product[] = this.cartService.getProducts();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getTotalCost() {
    return this.cartService.totalCost;
  }

  getTotalQuantity() {
    return this.cartService.totalQuantity;
  }

  onDeleteCartItem(id: string): void {
    this.cartService.deleteItem(id);
    this.products = this.cartService.getProducts();
  }
}
