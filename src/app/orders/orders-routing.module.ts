import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { RegisterComponent } from './register/register.component';
import { PurchaseComponent } from './purchase/purchase.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
  },
  {
    path: 'orders/register',
    component: RegisterComponent,
  },
  {
    path: 'orders/purchase',
    component: PurchaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
