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

  private isModalOpen = false;
  private orderStatus = '';
  private orderResponse: Order;

  public beforeDeliverOrders: Order[];
  public currentOrder: Order;
  public deliveredOrders: Order[] = [];

  ngOnInit() {
    this.fetchBeforeDeliverOrders();
  }

  fetchBeforeDeliverOrders() {
    this.ordersService.fetchBeforeDeliverOrders()
      .subscribe(res => {
        this.beforeDeliverOrders = res;
        this.currentOrder = this.beforeDeliverOrders[0];
      });
  }
  deliverOrder(id: number) {
    this.ordersService.deliverOrder(id)
      .subscribe(res => {
        this.orderResponse = this.currentOrder;
        this.orderStatus = 'success';
        this.isModalOpen = true;

        if (this.deliveredOrders.length > 1) {
          this.deliveredOrders.shift();
        }
        this.deliveredOrders.push(this.currentOrder);
        this.beforeDeliverOrders = res;
        this.currentOrder = this.beforeDeliverOrders[0];
      }, e => {
        this.orderResponse = null;
        this.orderStatus = 'error';
        this.isModalOpen = true;
      });
  }
  onKeyDown(event) {
    this.deliverOrder(this.currentOrder.id);
  }
  assetsPath(name) {
    if (name !== '') {
      return `../../../assets/images/icons/${name}.svg`;
    } else {
      return '';
    }
  }
  closeModal() {
    this.isModalOpen = false;
    this.orderStatus = '';
  }

}
