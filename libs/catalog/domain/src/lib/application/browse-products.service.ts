import { Injectable } from '@angular/core';
import { ProductService } from '../infrastructure/product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../entities/entities';

@Injectable({ providedIn: 'root'})
export class BrowseProductsService {
    
    products$ = new BehaviorSubject<Product[]>([]);
    
    constructor(private productService: ProductService) { }

    load(): void {
        this.productService.loadProducts().subscribe(
            products => this.products$.next(products),
            err => console.error('err', err)
        );
    }

}