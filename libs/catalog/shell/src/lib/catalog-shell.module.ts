import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogFeatureBrowseProductsModule } from '@e-proc/catalog/feature-browse-products';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'catalog-feature-request-product',
        loadChildren:
          '@e-proc/catalog/feature-request-product#CatalogFeatureRequestProductModule'
      },
      {
        path: 'catalog-feature-browse-products',
        loadChildren:
          '@e-proc/catalog/feature-browse-products#CatalogFeatureBrowseProductsModule'
      }
      // {
      //   path: 'catalog-feature-search-products',
      //   loadChildren:
      //     '@e-proc/catalog/feature-search-products#CatalogFeatureSearchProductsModule'
      // }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class CatalogShellModule {}
