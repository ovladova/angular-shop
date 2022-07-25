import {Injectable} from '@angular/core';
import {Product} from "../models/interfaces";
import {Category} from "../models/enums";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
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

  get totalQuantity(): number {
    return this.products.length;
  }

  get totalCost() {
    return this.products.reduce((previous, current) => {
      return previous + current.price
    }, 0);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
