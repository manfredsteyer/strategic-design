import { async, TestBed } from '@angular/core/testing';
import { OrderingFeatureSendOrderModule } from './ordering-feature-send-order.module';

describe('OrderingFeatureSendOrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderingFeatureSendOrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderingFeatureSendOrderModule).toBeDefined();
  });
});
