import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Product } from "../../shared/models/interfaces";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Output() deleteItemEvent = new EventEmitter<string>();
  @Input() products: Product[] = [];
  quantity: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem(id: string): void {
    this.deleteItemEvent.emit(id);
  }

  onQuantityIncrease(): void {
    this.quantity++;
  }

  onQuantityDecrease(): void {
    if (this.quantity === 1) {
      return
    }

    this.quantity--;
  }

  trackByFn(index: number, item: Product){
    return item.id;
  }

}
