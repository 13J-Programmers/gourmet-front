import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Product } from '../shared/product.model';
import { OrderDetailsAttribute } from '../shared/order.model';
import { OrdersService } from '../shared/orders.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.styl']
})
export class RegisterComponent implements OnInit {

  public products: Product[];
  public currentOrder: OrderDetailsAttribute[] = [];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.fetchProducts()
  }
  fetchProducts() {
    this.ordersService.fetchProducts()
      .subscribe(res => {
        this.products = res;
        this.products.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        });
      });
  }
  addProduct(product: Product) {
    const index = this.currentOrder.findIndex(c => c.productId === product.id);
    if (index !== -1) {
      this.currentOrder[index].quantity += 1;
    } else {
      const newOrder = new OrderDetailsAttribute(product.id, 1);
      this.currentOrder.push(newOrder);
    }
  }
  decrementProduct(product: Product) {
    const index = this.currentOrder.findIndex(c => c.productId === product.id);
    if (index !== -1) {
      this.currentOrder[index].quantity -= 1;
      if (this.currentOrder[index].quantity === 0) {
        this.currentOrder.splice(index, 1);
      }
    }
  }
  getProductCount(product: Product): number {
    const index = this.currentOrder.findIndex(c => c.productId === product.id);
    if (index !== -1) {
      return this.currentOrder[index].quantity;
    } else {
      return 0;
    }
  }
  registerOrder() {
    this.ordersService.registerOrder(this.currentOrder)
      .subscribe(res => {
        this.currentOrder = [];
        this.fetchProducts();
      });
  }

  abc() {
    console.log(this.currentOrder);
  }

  validateOrder(): Boolean {
    return false;
  }

}
