import { async, TestBed } from '@angular/core/testing';
import { CatalogShellModule } from './catalog-shell.module';

describe('CatalogShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CatalogShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CatalogShellModule).toBeDefined();
  });
});
