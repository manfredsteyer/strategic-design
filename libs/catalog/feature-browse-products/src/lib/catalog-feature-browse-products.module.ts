import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CatalogDomainModule } from '@e-proc/catalog/domain';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { ProductsComponent } from './products/products.component';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogDomainModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),
    MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule
  ],
  declarations: [
    ProductsComponent,
    DashboardComponent
    
  ],
  exports: [
    ProductsComponent,
    DashboardComponent
  ]
})
export class CatalogFeatureBrowseProductsModule {}
