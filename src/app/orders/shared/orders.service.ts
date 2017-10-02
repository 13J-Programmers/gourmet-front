import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { Product } from './product.model';
import { Order } from './order.model';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient) { }

  // 全商品を取得
  fetchProducts () : Observable<Product[]> {
    const requestUrl = this.genUrl('products/');
    return this.http.get<Product[]>(requestUrl);
  }

  // 会計前のリストを取得
  fetchBeforePurchaseOrders () : Observable<Order[]> {
    const requestUrl = this.genUrl(`groups/${environment.group.id}/purchase`);
    return this.http.get<Order[]>(requestUrl);
  }

  // 配達前のリスト
  fetchBeforeDeliverOrders () : Observable<Order[]> {
    const requestUrl = this.genUrl(`groups/${environment.group.id}/deliver`);
    return this.http.get<Order[]>(requestUrl);
  }
  registerOrder (body: Order) : Observable<Order> {
    const requestUrl = this.genUrl(`group/${environment.group.id}/register_orders`)
    return this.http.post<Order>(requestUrl, body)
  }

  private genUrl(url : string) : string {
    return `http://${environment.api.host}:${environment.api.port}/api/${url}`;
  }
}
