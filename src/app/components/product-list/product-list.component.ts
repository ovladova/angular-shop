import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../shared/services";
import {Product} from "../../shared/models/interfaces";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productsService.getProducts();
  }
}
