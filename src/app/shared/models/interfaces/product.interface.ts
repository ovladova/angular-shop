import { Category } from "../enums";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}
