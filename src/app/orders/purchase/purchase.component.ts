import { Component, OnInit } from '@angular/core';

import { OrdersService } from '../shared/orders.service';
import { Order } from '../shared/order.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.styl']
})
export class PurchaseComponent implements OnInit {

  private startX = 0;
  private isRelease = false;
  public isModalOpen = false;
  public orderStatus = '';
  public orderResponse: Order;

  public beforePurchaseOrders: Order[];
  public currentOrder: Order | null;
  public currentOrderStyles: {};

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.fetchBeforePurchaseOrders();
    setInterval(() => {
      this.fetchBeforePurchaseOrders();
    }, 5000);
  }

  fetchBeforePurchaseOrders() {
    this.ordersService.fetchBeforePurchaseOrders()
      .subscribe(res => {
        this.beforePurchaseOrders = res;
        this.currentOrder = this.beforePurchaseOrders.length > 0 ?
          this.beforePurchaseOrders[0] : null;
      });
  }

  purchaseOrder (orderId: number) {
    this.ordersService.purchaseOrder(orderId)
      .subscribe(res => {
        this.orderResponse = this.currentOrder;
        this.orderStatus = 'success';
        this.isModalOpen = true;
        this.beforePurchaseOrders = res;
        this.currentOrder = this.beforePurchaseOrders.length > 0 ?
        this.beforePurchaseOrders[0] : null;
      }, e => {
        this.orderResponse = null;
        this.orderStatus = 'error';
        this.isModalOpen = true;
      });
  }

  calcPrice(order: Order): number {
    return order.order_details.map(orderItem => {
      return orderItem.amount;
    }).reduce((prev, current) => {
      return prev + current;
    }, 0);
  }

  onTouchStart(event) {
    this.startX = event.changedTouches[0].pageX;
    this.isRelease = false;
  }
  onTouchEnd(event) {
    if (event.changedTouches[0].pageX - this.startX > 120) {
      this.purchaseOrder(this.currentOrder.id);
    }
    this.currentOrderStyles = { 'left.px': 0 };
    this.isRelease = true;
  }
  onTouchMove(event) {
    const left = event.changedTouches[0].pageX - this.startX;
    this.currentOrderStyles = { 'left.px': left };
    event.preventDefault();
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
