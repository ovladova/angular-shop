import { Injectable } from '@angular/core';
import {Product} from "../../shared/models/interfaces";
import {Category} from "../../shared/models/enums";
import {ProductsService} from "../../products/services/products.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  get totalQuantity(): number {
    return this.products.length;
  }

  get totalCost(): number {
    return this.products.reduce((previous, current) => {
      return previous + current.price
    }, 0);
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProducts(id: string): void {
    const newItem = this.productsService.getProductById(id);
    if (!newItem) {
      return
    }
    this.products.push({ ...newItem });
  }

  deleteItem(id: string): void {
    this.products = this.products.filter(item => item.id !== id);
  }
}
