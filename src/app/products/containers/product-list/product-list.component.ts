import { Component, OnInit } from '@angular/core';
import { CartService } from "../../../shared/services";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addItem(newItemId: string) {
    this.cartService.addProducts(newItemId);
  }
}
