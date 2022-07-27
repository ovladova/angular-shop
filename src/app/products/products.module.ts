import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './containers/products/products.component';
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./containers/product-list/product-list.component";



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsComponent,
  ]
})
export class ProductsModule { }
