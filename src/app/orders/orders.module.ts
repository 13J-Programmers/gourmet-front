import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { OrdersRoutingModule } from './orders-routing.module';

import { OrdersComponent } from './orders.component';
import { RegisterComponent } from './register/register.component';
import { PurchaseComponent } from './purchase/purchase.component';

import { OrdersService } from './shared/orders.service';
import { DeliverComponent } from './deliver/deliver.component';
import { RegisterItemComponent } from './register/register-item/register-item.component';

import { BgImgDirective } from 'shared/bg-img.directive';
import { StatusModalComponent } from './shared/status-modal/status-modal.component';

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
    RegisterItemComponent,
    BgImgDirective,
    StatusModalComponent,
  ],
  providers: [
    OrdersService,
  ],
})
export class OrdersModule { }
