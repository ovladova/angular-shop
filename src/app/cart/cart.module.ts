import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartListComponent} from "./containers/cart-list/cart-list.component";
import {CartItemComponent} from "./components/cart-item/cart-item.component";
import { CartComponent } from './containers/cart/cart.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CartComponent,
  ]
})
export class CartModule { }
