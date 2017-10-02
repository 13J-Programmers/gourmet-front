import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders.component';
import { RegisterComponent } from './register/register.component';
import { PurchaseComponent } from './purchase/purchase.component';

import { OrdersService } from './shared/orders.service';
import { DeliverComponent } from './deliver/deliver.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    OrdersRoutingModule,
  ],
  declarations: [
    OrdersComponent,
    RegisterComponent,
    PurchaseComponent,
    DeliverComponent,
  ],
  providers: [
    OrdersService,
  ],
})
export class OrdersModule { }
