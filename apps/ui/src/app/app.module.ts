import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatalogFeatureBrowseProductsModule } from '@e-proc/catalog/feature-browse-products';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { CatalogFeatureRequestProductModule } from '@e-proc/catalog/feature-request-product';
import { OrderingFeatureSendOrderModule } from '@e-proc/ordering/feature-send-order';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [BrowserModule, OrderingFeatureSendOrderModule, CatalogFeatureBrowseProductsModule, CatalogFeatureRequestProductModule, BrowserAnimationsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
