import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogDomainModule } from '@e-proc/catalog/domain';

@NgModule({
  imports: [CommonModule, CatalogDomainModule]
})
export class CatalogApiModule {}
