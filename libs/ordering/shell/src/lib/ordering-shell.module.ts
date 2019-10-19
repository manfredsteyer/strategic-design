import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderingFeatureSendOrderModule } from '@e-proc/ordering/feature-send-order';

@NgModule({
  imports: [CommonModule, OrderingFeatureSendOrderModule]
})
export class OrderingShellModule {}
