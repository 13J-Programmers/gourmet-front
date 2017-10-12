import { Component, OnInit } from '@angular/core';

import { OrdersService } from './shared/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.styl']
})
export class OrdersComponent implements OnInit {

  public ordersItems = [
    { name: '注文', link: '/orders/register'},
    { name: '会計', link: '/orders/purchase'},
    { name: '調理', link: '/orders/deliver'}
  ];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
  }

}
