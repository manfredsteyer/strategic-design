import { async, TestBed } from '@angular/core/testing';
import { SharedUiAddressModule } from './shared-ui-address.module';

describe('SharedUiAddressModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiAddressModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiAddressModule).toBeDefined();
  });
});
