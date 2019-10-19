import { Component, OnInit } from '@angular/core';
import { BrowseProductsService } from '@e-proc/catalog/domain';

@Component({
  selector: 'e-proc-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$ = this.browser.products$;

  constructor(private browser: BrowseProductsService) { }

  ngOnInit() {
    this.browser.load();
  }

}
