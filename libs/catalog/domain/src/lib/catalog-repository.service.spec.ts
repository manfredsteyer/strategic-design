/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatalogRepositoryService } from './catalog-repository.service';

describe('Service: CatalogRepository', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogRepositoryService]
    });
  });

  it('should ...', inject(
    [CatalogRepositoryService],
    (service: CatalogRepositoryService) => {
      expect(service).toBeTruthy();
    }
  ));
});
