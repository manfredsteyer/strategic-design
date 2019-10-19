import { async, TestBed } from '@angular/core/testing';
import { CatalogFeatureRequestProductModule } from './catalog-feature-request-product.module';

describe('CatalogFeatureRequestProductModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogFeatureRequestProductModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogFeatureRequestProductModule).toBeDefined();
  });
});
