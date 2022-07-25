import { Injectable } from '@angular/core';
import {Product} from "../models/interfaces";
import {Category} from "../models/enums";

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

  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  addProducts(id: string): void {
    console.log(id);
  }
}
