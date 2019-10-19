import { async, TestBed } from '@angular/core/testing';
import { CatalogApiModule } from './catalog-api.module';

describe('CatalogApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogApiModule).toBeDefined();
  });
});
