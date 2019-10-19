import { async, TestBed } from '@angular/core/testing';
import { OrderingShellModule } from './ordering-shell.module';

describe('OrderingShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderingShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderingShellModule).toBeDefined();
  });
});
