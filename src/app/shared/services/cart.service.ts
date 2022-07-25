import { Injectable } from '@angular/core';
import {Product} from "../models/interfaces";
import {Category} from "../models/enums";
import {ProductsService} from "./products.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[] = [
    {
      id: 'p2203',
      name: 'LOGO T-SHIRT',
      description: 'some desc',
      price: 99,
      category: Category.tops,
      isAvailable: true
    },
    {
      id: 'p2201',
      name: 'PINK GLASSES',
      description: 'some desc',
      price: 50,
      category: Category.accessories,
      isAvailable: true
    },
    {
      id: 'p2200',
      name: 'LONG SLEEVED DRESS',
      description: 'some desc',
      price: 365,
      category: Category.dresses,
      isAvailable: false
    }
  ]

  constructor(private productsService: ProductsService) { }

  getProducts(): Product[] {
    return this.products;
  }

  addProducts(id: string): void {
    const newItem = this.productsService.getProductById(id);
    if (!newItem) {
      return
    }
    this.products.push({ ...newItem });
    console.log(this.products)
  }
}
