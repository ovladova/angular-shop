import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/models/interfaces";
import {Category} from "../../shared/models/enums";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title: string = 'This is First Shop Angular component';
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

  ngOnInit(): void {
  }

}
