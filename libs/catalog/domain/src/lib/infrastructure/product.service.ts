import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../entities/entities';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  loadProducts(): Observable<Product[]> {

    // Simulate HTTP Request
    return of([
      { 
        id: 1, 
        productCategoryId: 7,
        name: 'Rubber Chicken',
        pictures: [],
        prices: []
      },
      { 
        id: 2, 
        productCategoryId: 9,
        name: 'Pulley',
        pictures: [],
        prices: []
      },
      { 
        id: 3, 
        productCategoryId: 3,
        name: 'Motor Saw Fuel',
        pictures: [],
        prices: []
      }
    ]);
  }

}
