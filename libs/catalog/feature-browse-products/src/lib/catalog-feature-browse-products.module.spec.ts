import { async, TestBed } from '@angular/core/testing';
import { CatalogFeatureBrowseProductsModule } from './catalog-feature-browse-products.module';

describe('CatalogFeatureBrowseProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogFeatureBrowseProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogFeatureBrowseProductsModule).toBeDefined();
  });
});
