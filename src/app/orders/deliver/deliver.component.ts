import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../shared/orders.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.styl']
})
export class DeliverComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  public beforeDeliverOrders: Order[];

  ngOnInit() {
    this.ordersService.fetchBeforeDeliverOrders()
      .subscribe(res => {
        this.beforeDeliverOrders = res;
      })
  }

}
