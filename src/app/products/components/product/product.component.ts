import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../shared/models/interfaces";
import {ProductsService} from "../../../shared/services";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Output() addToCartEvent = new EventEmitter<string>();
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(id: string): void {
    this.addToCartEvent.emit(id);
  }

}
