import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { Product } from './product.model';
import { Order, OrderDetailsAttribute } from './order.model';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  // 全商品を取得
  fetchProducts () : Observable<Product[]> {
    const requestUrl = this.makeUrl('products/');
    return this.http.get<Product[]>(requestUrl);
  }

  // 会計前のリストを取得
  fetchBeforePurchaseOrders () : Observable<Order[]> {
    const requestUrl = this.makeUrl(`groups/${environment.group.id}/purchase`);
    return this.http.get<Order[]>(requestUrl);
  }

  // 配達前のリスト
  fetchBeforeDeliverOrders () : Observable<Order[]> {
    const requestUrl = this.makeUrl(`groups/${environment.group.id}/deliver`);
    return this.http.get<Order[]>(requestUrl);
  }

  registerOrder (orderDetails: OrderDetailsAttribute[]) : Observable<Order> {
    const requestUrl = this.makeUrl(`groups/${environment.group.id}/register_orders`);
    const body = {
      order: {
        orderDetailsAttributes: orderDetails.map ((orderItem) => orderItem.makeRequestBody)
      }
    };
    return this.http.post<Order>(requestUrl, body);
  }

  purchaseOrder (id: number) : Observable<Order> {
    const requestUrl = this.makeUrl(`gruops/${environment.group.id}/purchase/${id}/commit`);
    return this.http.post<Order>(requestUrl, {});
  }

  deliverOrder (id: number) : Observable<Order> {
    const requestUrl = this.makeUrl(`groups/${environment.group.id}/deliver/${id}/commit`);
    return this.http.post<Order>(requestUrl, {});
  }

  private makeUrl(url : string) : string {
    return `http://${environment.api.host}:${environment.api.port}/api/${url}`;
  }
}
