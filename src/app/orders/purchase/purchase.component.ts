import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../shared/orders.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.styl']
})
export class PurchaseComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  public beforePurchaseOrders: Order[];

  ngOnInit() {
    this.ordersService.fetchBeforePurchaseOrders()
      .subscribe(res => {
        this.beforePurchaseOrders = res;
      });
  }

  purchaseOrder (order: Order) {
    // this.ordersService.purchaseOrder(order)
  }
}
